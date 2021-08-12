import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../../../lib/constants/colors';
import { Ingredient } from '../../../types';

const Styled = {
  Root: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px;

    & > h5 {
      margin-bottom: 12px;
      color: ${colors.beige40};
      font-size: 18px;
      font-weight: bold;
    }
  `,

  ContentBox: styled.div`
    flex: 1;
    border-radius: 8px;
    background-color: ${colors.beige10};
    padding: 14px 16px;
    overflow-y: scroll;

    & > h3 {
      margin-bottom: 6px;
      color: ${colors.green50};
      font-size: 18px;
      font-weight: bold;
    }

    & > p {
      margin-right: 8px;
      line-height: 1.7;
      letter-spacing: -0.03em;
      color: ${colors.green50};
      font-size: 16px;
      font-weight: normal;
    }

    @media (min-width: 769px) {
      max-height: 200px;
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
