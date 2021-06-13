import styled from "@emotion/styled";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import mixin from "../../lib/style/mixin";

const Styled = {
  Img: styled.img`
    position: absolute;
    bottom: 20px;
    ${mixin.clickable}
  `,
};

function ScrollDownButton() {
  const size = useWindowSize();

  const scrollDown = () => {
    window.scrollTo({ top: size.height, behavior: "smooth" });
  };

  return <Styled.Img onClick={scrollDown} src="/assets/icons/scroll_down.svg" alt="scroll-down" />;
}

export default ScrollDownButton;
