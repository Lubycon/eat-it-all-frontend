import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    height: 200px;
    background-color: ${colors.beige20};
  `,
};

function Carousel() {
  return <Styled.Root></Styled.Root>;
}

export default Carousel;
