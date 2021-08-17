import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';

import { useGetRestaurant } from '../../../hooks/api/restaurant';
import useWindowSize from '../../../hooks/useWindowSize';
import { colors } from '../../../lib/constants/colors';
import { clickable } from '../../../lib/style/mixin';
import { eatAllFileUrl } from '../../../lib/utils/path';
import { modalRestaurantIdState } from '../../../store';
import KakaoMapContainer from '../../map/KakaoMapContainer';
import Place from '../../map/Place';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import MainIngredientContent from './MainIngredientContent';
import RestaurantMenu from './RestaurantMenu';

const Styled = {
  Dimmer: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background: rgba(23, 23, 23, 0.5);

    @media (max-width: 768px) {
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
    }
  `,

  Modal: styled.div`
    border-radius: 16px;
    box-shadow: 0px 4px 32px rgba(79, 62, 43, 0.35);
    background-color: ${colors.ivory10};
    width: 600px;

    animation: 0.4s ease fadeIn;

    @media (max-width: 768px) {
      border-radius: 0;
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
    }

    @media (max-width: 768px) {
      overflow-y: scroll;
    }

    @keyframes fadeIn {
      from {
        transform: translate(0, 30px);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  `,

  Header: styled.div<{ imageUrl: string; height: number }>`
    display: flex;
    justify-content: space-between;
    border-radius: 16px 16px 0 0;

    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      ${({ imageUrl }) => `url(${eatAllFileUrl(imageUrl)})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 24px 24px;
    height: ${({ height }) => `${height}px`};

    @media (max-width: 768px) {
      border-radius: 0;
    }
  `,

  Main: styled.div`
    padding: 8px;

    & > h2 {
      margin-bottom: 16px;
      color: ${colors.white};
      font-size: 24px;
      font-weight: bold;

      @media (max-width: 768px) {
        margin-bottom: 6px;
        font-size: 18px;
      }
    }

    & > h4 {
      margin-bottom: 20px;
      color: ${colors.ivory10};
      font-size: 14px;
      font-weight: 500;

      @media (max-width: 768px) {
        margin-bottom: 8px;
        font-size: 12px;
      }
    }
  `,

  CancelButton: styled(IconButton)`
    width: 48px;
    height: 48px;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `,

  TagWrapper: styled.div`
    display: flex;
  `,

  Tag: styled.div`
    margin-right: 6px;
    border-radius: 5px;
    background-color: ${colors.ivory10};
    padding: 6px 8px;
    color: ${colors.beige40};
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,

  Content: styled.div`
    display: flex;
    margin: 12px 8px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  MapWrapper: styled.div`
    margin: 20px 24px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
  `,
};

interface Props {
  headerHeight?: number;
  showMap?: boolean;
}

function RestaurantModal({ headerHeight = 164, showMap = false }: Props) {
  const [modalRestaurantId, setModalRestaurantId] = useRecoilState(modalRestaurantIdState);
  const { data: restaurant } = useGetRestaurant(modalRestaurantId as number);

  const size = useWindowSize();
  const vh = size && size.height * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  /** Dimmer 영역 스크롤 막기 */
  React.useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;

      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  if (restaurant == null) return <Spinner />;

  return (
    <Styled.Dimmer>
      <Styled.Modal>
        <Styled.Header imageUrl={restaurant.thumbnailImageUrl} height={headerHeight}>
          <Styled.Main>
            <h2>{restaurant.name}</h2>
            <h4>{restaurant.address}</h4>
            <Styled.TagWrapper>
              {restaurant.hashtags.map((hashTag) => (
                <Styled.Tag key={hashTag}>{hashTag}</Styled.Tag>
              ))}
            </Styled.TagWrapper>
          </Styled.Main>
          <Styled.CancelButton
            name="cancel"
            color={colors.white}
            onClick={() => setModalRestaurantId(null)}
          />
        </Styled.Header>
        <Styled.Content>
          <RestaurantMenu menus={restaurant.menus} />
          <MainIngredientContent ingredient={restaurant.material} />
        </Styled.Content>
        {showMap && (
          <Styled.MapWrapper>
            <KakaoMapContainer
              height="260px"
              lat={restaurant.kakaoMap.latitude}
              lng={restaurant.kakaoMap.longitude}
            >
              <Place
                lat={restaurant.kakaoMap.latitude}
                lng={restaurant.kakaoMap.longitude}
                id={restaurant.id}
              />
            </KakaoMapContainer>
          </Styled.MapWrapper>
        )}
      </Styled.Modal>
    </Styled.Dimmer>
  );
}

export default RestaurantModal;
