import React from "react";
import router from "next/router";
import styled from "@emotion/styled";
import { clickable } from "../../lib/style/mixin";

const Styled = {
  Icon: styled.img`
    position: absolute;
    top: 36px;
    left: 48px;
    z-index: 10;
    ${clickable}
  `,
};

function BackHomeIcon() {
  return <Styled.Icon src="/assets/icons/ic_map_back.svg" alt="홈으로 가기" onClick={() => router.push("/")} />;
}

export default BackHomeIcon;
