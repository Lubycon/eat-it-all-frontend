import React from "react";
import styled from "@emotion/styled";
import CategoryCarousel from "./CategoryCarousel";
import { colors } from "../../lib/constants/colors";
import ScrollDownButton from "../common/ScrollDownButton";
import { useMobile } from "../../hooks/useMobile";

const Styled = {
  Root: styled.div`
    margin-top: 96px;
    height: calc(100vh - 96px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
        opacity: 0;
        transform: translate(0, 30px);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    animation: 0.8s ease fadeIn;

    & > h2 {
      font-size: 52px;
      line-height: 1.4;
      font-weight: bold;
      color: ${colors.green50};

      & > del {
        text-decoration-color: ${colors.orange50};
      }
      & > strong {
        color: ${colors.orange50};
      }
    }
    & > h1 {
      margin-top: 18px;
      font-weight: bold;
      font-size: 18px;
      color: ${colors.green50};
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
        <Styled.Illust src="/assets/images/main_illust.svg" alt="" />
      </Styled.Contents>
      {isMobile || <CategoryCarousel />}
      {isMobile && <ScrollDownButton />}
    </Styled.Root>
  );
}

export default Main;
