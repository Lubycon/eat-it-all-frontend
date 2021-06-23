import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 66px;
    width: 400px;
    height: 400px;
    background: ${colors.ivory10};
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    border-radius: 5px;
    padding: 16px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
  `,

  MenuItem: styled.div`
    background-color: ${colors.beige30};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.white};
    text-align: center;
    line-height: 1.4;
    padding: 24px;
  `,
};

interface Props {
  items: string[];
}

function DropdownMenu({ items }: Props) {
  return (
    <Styled.Root>
      {items.map((item) => (
        <Styled.MenuItem key={item}>{item}</Styled.MenuItem>
      ))}
    </Styled.Root>
  );
}

export default DropdownMenu;
