import styled from '@emotion/styled';
import React from 'react';

import { useMobile } from '../../hooks/useMobile';
import useWindowSize from '../../hooks/useWindowSize';
import { colors } from '../../lib/constants/colors';
import { imageSrc } from '../../lib/utils/path';
import ScrollDownButton from '../common/ScrollDownButton';
import CategoryCarousel from './CategoryCarousel';

const Styled = {
  Root: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-top: 96px;
    height: calc(var(--vh, 1vh) * 100 - 96px);
  `,

  Contents: styled.div`
    display: flex;
    align-items: center;
    margin: 48px 0 88px 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  Headline: styled.div`
    /* margin-right: 92px; */
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
    animation: 0.8s ease fadeIn;

    & > h2 {
      line-height: 1.4;
      color: ${colors.green50};
      font-size: 52px;
      font-weight: bold;

      & > del {
        text-decoration-color: ${colors.orange50};
      }
      & > strong {
        color: ${colors.orange50};
      }
    }
    & > h1 {
      margin-top: 18px;
      color: ${colors.green50};
      font-size: 18px;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      margin-bottom: 36px;

      & > h2 {
        font-size: 32px;
        font-weight: bold;
      }
    }
  `,

  Illust: styled.img`
    width: 328px;
    height: 328px;

    @media (max-width: 768px) {
      width: 280px;
      height: 280px;
    }
  `,
};

function Main() {
  const isMobile = useMobile();
  const size = useWindowSize();
  const vh = size && size.height * 0.01;

  React.useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Styled.Root>
      <Styled.Contents>
        <Styled.Headline>
          <h2>
            <del>더 이상</del>
            <br />
            <strong>다이어트 중</strong>이라는 말로
            <br /> 약속을 피하지 마세요
          </h2>
          <h1>다이어터 외식 추천 서비스, 다먹어</h1>
        </Styled.Headline>
        <Styled.Illust src={imageSrc('main_illust', 'svg')} alt="" />
      </Styled.Contents>
      {isMobile || <CategoryCarousel />}
      {isMobile && <ScrollDownButton />}
    </Styled.Root>
  );
}

export default Main;
