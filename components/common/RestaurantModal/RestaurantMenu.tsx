import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../../../lib/constants/colors';
import { Menu } from '../../../types';

const Styled = {
  Root: styled.div`
    flex: 1;
    padding: 16px;

    & > h5 {
      margin-bottom: 16px;
      color: ${colors.beige40};
      font-size: 18px;
      font-weight: bold;
    }
  `,

  MenuItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    & > h6 {
      color: ${colors.gray90};
      font-size: 16px;
      font-weight: normal;
    }

    & > div {
      letter-spacing: 0.02em;
      color: ${colors.green50};
      font-size: 16px;
      font-weight: normal;
    }
  `,
};

interface Props {
  menus: Menu[];
}

function RestaurantMenu({ menus }: Props) {
  return (
    <Styled.Root>
      <h5>대표 메뉴</h5>
      {menus.map((menu) => (
        <Styled.MenuItem key={menu.id}>
          <h6>{menu.name}</h6>
          <div>{menu.price}원</div>
        </Styled.MenuItem>
      ))}
    </Styled.Root>
  );
}

export default RestaurantMenu;
