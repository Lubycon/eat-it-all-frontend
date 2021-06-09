import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.img`
    border-radius: 5px;
    background-color: ${colors.beige20};

    &:hover {
      box-shadow: 0px 4px 8px rgba(155, 110, 69, 0.25);
      background-color: ${colors.beige30};
    }
  `,
};

function GoToMapButton() {
  return (
    <Link href="/map">
      <Styled.Root src="/assets/icons/map_ivory.svg" />
    </Link>
  );
}

export default GoToMapButton;
