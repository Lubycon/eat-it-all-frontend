import styled from "@emotion/styled";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

const Styled = {
  Root: styled.div`
    height: calc(100vh - 120px);
  `,

  Contents: styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0 54px 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  Headline: styled.div``,
};

function Main() {
  return (
    <Styled.Root>
      <Styled.Contents>
        <Styled.Headline>
          <h1>
            <div>더 이상</div>
            <strong>다이어트 중</strong>이라는 말로
            <br /> 약속을 피하지 마세요
          </h1>
          <h2>다이어터 외식 추천 서비스, 다먹어</h2>
        </Styled.Headline>
        <img src="/assets/images/food_background.png" />
      </Styled.Contents>
      <CategoryCarousel />
    </Styled.Root>
  );
}

export default Main;
