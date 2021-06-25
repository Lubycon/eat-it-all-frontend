import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { clickable } from "../../lib/style/mixin";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    border-radius: 50px;
    background-color: ${colors.green50};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 24px;
    transition: 0.2s ease-in-out;
    ${clickable};

    @media (max-width: 768px) {
      width: 180px;
      padding: 8px 12px;
    }

    &:hover {
      box-shadow: 0px 4px 8px rgba(155, 110, 69, 0.25);
      background-color: ${colors.green40};
    }

    & > div {
      font-weight: bold;
      font-size: 16px;
      color: ${colors.ivory10};
      margin-right: 4px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    & > img {
      width: 28px;
      height: 28px;

      @media (max-width: 768px) {
        width: 22px;
        height: 22px;
      }
    }
  `,
};

interface Props {
  curationId?: number;
}

function GoToMapButton({ curationId = 0 }: Props) {
  return (
    <Link href={`/map?curationId=${curationId}`}>
      <Styled.Root>
        <div>더 많은 식당 보러가기</div>
        <img src="/assets/icons/ic_map_white.svg" alt="지도" />
      </Styled.Root>
    </Link>
  );
}

export default GoToMapButton;
