import React from "react";
import styled from "@emotion/styled";
import CategoryCarousel from "./CategoryCarousel";
import { colors } from "../../lib/constants/colors";
import ScrollDownButton from "../common/ScrollDownButton";
import useWindowSize from "../../hooks/useWindowSize";

const Styled = {
  Root: styled.div`
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,

  Contents: styled.div`
    display: flex;
    align-items: center;
    margin: 32px 0 72px 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  Headline: styled.div`
    margin-right: 92px;
    & > h2 {
      font-size: 52px;
      line-height: 66px;
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
  `,
};

function Main() {
  const size = useWindowSize();
  const isMobile = size && size?.width < 768;

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
        <img src="/assets/images/food_background.png" alt="" />
      </Styled.Contents>
      {isMobile || <CategoryCarousel />}
      <ScrollDownButton />
    </Styled.Root>
  );
}

export default Main;
