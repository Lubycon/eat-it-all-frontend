import styled from "@emotion/styled";
import React from "react";
import mixin from "../../lib/style/mixin";

const Styled = {
  Img: styled.img`
    position: absolute;
    bottom: 20px;
    ${mixin.clickable}
  `,
};

function ScrollDownButton() {
  return <Styled.Img src="/assets/icons/scroll_down.svg" alt="scroll-down" />;
}

export default ScrollDownButton;
