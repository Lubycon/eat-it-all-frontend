import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../lib/constants/colors";
import { Menu } from "../../../types";

const Styled = {
  Root: styled.div`
    flex: 1;
    padding: 16px;

    & > h5 {
      font-weight: bold;
      font-size: 18px;
      color: ${colors.beige40};
      margin-bottom: 16px;
    }
  `,

  MenuItem: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    & > h6 {
      font-weight: normal;
      font-size: 18px;
      color: ${colors.gray90};
    }

    & > div {
      font-weight: normal;
      font-size: 18px;
      color: ${colors.green50};
      letter-spacing: 0.02em;
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
        <Styled.MenuItem>
          <h6>{menu.name}</h6>
          <div>{menu.price}원</div>
        </Styled.MenuItem>
      ))}
    </Styled.Root>
  );
}

export default RestaurantMenu;
