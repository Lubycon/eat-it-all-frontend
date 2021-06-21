import styled from "@emotion/styled";
import React from "react";

const Styled = {
  Root: styled.div<{ height: number }>`
    height: ${({ height }) => `${height}px`};
    padding: 24px;
    border-radius: 10px;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/curation_content.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & > div {
      width: 180px;
      line-height: 1.2;
    }
  `,
};

interface Props {
  title: string;
  height?: number;
}

function CurationContent({ title, height = 200 }: Props) {
  return (
    <Styled.Root height={height}>
      <div>{title}</div>
    </Styled.Root>
  );
}

export default CurationContent;
