import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

const Styled = {
  Root: styled.div<{ height: number; imageUrl: string }>`
    height: ${({ height }) => `${height}px`};
    padding: 24px;
    border-radius: 10px;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${({ imageUrl }) => `url("https://file.eat-all.io${imageUrl}")`};
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
  id: number;
  title: string;
  height?: number;
  imageUrl: string;
}

function CurationContent({ id, title, height = 200, imageUrl }: Props) {
  return (
    <Link key={id} href={`/curation/${id}`}>
      <Styled.Root height={height} imageUrl={imageUrl}>
        <div>{title}</div>
      </Styled.Root>
    </Link>
  );
}

export default CurationContent;
