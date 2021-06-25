import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../lib/constants/colors";
import { Ingredient } from "../../../types";

const Styled = {
  Root: styled.div`
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;

    & > h5 {
      font-weight: bold;
      font-size: 18px;
      color: ${colors.beige40};
      margin-bottom: 12px;
    }
  `,

  ContentBox: styled.div`
    background-color: ${colors.beige10};
    border-radius: 8px;
    flex: 1;
    max-height: 200px;
    padding: 14px 16px;
    overflow-y: scroll;

    & > h3 {
      font-weight: bold;
      font-size: 18px;
      color: ${colors.green50};
      margin-bottom: 6px;
    }

    & > p {
      font-weight: normal;
      font-size: 16px;
      line-height: 1.7;
      letter-spacing: -0.03em;
      color: ${colors.green50};
      margin-right: 8px;
    }
  `,
};

interface Props {
  ingredient: Ingredient;
}

function MainIngredientContent({ ingredient }: Props) {
  return (
    <Styled.Root>
      <h5>주 재료</h5>
      <Styled.ContentBox>
        <h3>{ingredient.name} 🌾</h3>
        <p>{ingredient.contents}</p>
      </Styled.ContentBox>
    </Styled.Root>
  );
}

export default MainIngredientContent;
