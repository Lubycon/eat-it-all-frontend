import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { useGetRestaurant } from "../../../hooks/api/restaurant";
import { colors } from "../../../lib/constants/colors";
import { clickable } from "../../../lib/style/mixin";
import { modalRestaurantIdState } from "../../../store";
import Spinner from "../Spinner";
import RestaurantMenu from "./RestaurantMenu";
import MainIngredientContent from "./MainIngredientContent";
import KakaoMapContainer from "../../map/KakaoMapContainer";
import Place from "../../map/Place";

const Styled = {
  Dimmer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(23, 23, 23, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Modal: styled.div`
    width: 600px;
    background-color: ${colors.ivory10};
    box-shadow: 0px 4px 32px rgba(79, 62, 43, 0.35);
    border-radius: 16px;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate(0, 30px);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    animation: 0.4s ease fadeIn;
  `,

  Header: styled.div<{ imageUrl: string; height: number }>`
    height: ${({ height }) => `${height}px`};
    padding: 24px 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 16px 16px 0 0;

    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      ${({ imageUrl }) => `url("https://file.eat-all.io${imageUrl}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,

  Main: styled.div`
    padding: 8px;

    & > h2 {
      font-weight: bold;
      font-size: 24px;
      color: ${colors.white};
      margin-bottom: 16px;

      @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 6px;
      }
    }

    & > h4 {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 20px;
      color: ${colors.ivory10};

      @media (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
  `,

  CancelIcon: styled.img`
    width: 48px;
    height: 48px;
    ${clickable}

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `,

  TagWrapper: styled.div`
    display: flex;
  `,

  Tag: styled.div`
    border-radius: 5px;
    margin-right: 6px;
    color: ${colors.beige40};
    background-color: ${colors.ivory10};
    padding: 6px 8px;
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,

  Content: styled.div`
    display: flex;
    margin: 12px 8px;
  `,

  MapWrapper: styled.div`
    margin: 20px 16px;
    border-radius: 8px;
    border: 1px solid #e9e9e9;
  `,
};

interface Props {
  headerHeight?: number;
  showMap?: boolean;
}

function RestaurantModal({ headerHeight = 164, showMap = false }: Props) {
  const [modalRestaurantId, setModalRestaurantId] = useRecoilState(modalRestaurantIdState);
  const { data: restaurant } = useGetRestaurant(modalRestaurantId as number);
  console.log(`restaurant`, restaurant);

  /** Dimmer 영역 스크롤 막기 */
  React.useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
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
          <Styled.CancelIcon onClick={() => setModalRestaurantId(null)} src="/assets/icons/ic_cancel.svg" alt="닫기" />
        </Styled.Header>
        <Styled.Content>
          <RestaurantMenu menus={restaurant.menus} />
          <MainIngredientContent ingredient={restaurant.material} />
        </Styled.Content>
        {showMap && (
          <Styled.MapWrapper>
            <KakaoMapContainer height="260px" lat={restaurant.kakaoMap.latitude} lng={restaurant.kakaoMap.longitude}>
              <Place lat={restaurant.kakaoMap.latitude} lng={restaurant.kakaoMap.longitude} id={restaurant.id} />
            </KakaoMapContainer>
          </Styled.MapWrapper>
        )}
      </Styled.Modal>
    </Styled.Dimmer>
  );
}

export default RestaurantModal;
