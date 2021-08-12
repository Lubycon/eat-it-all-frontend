import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const Styled = {
  Root: styled.div<{ height: number; imageUrl: string }>`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 10px;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${({ imageUrl }) => `url("https://file.eat-all.io${imageUrl}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 24px;
    height: ${({ height }) => `${height}px`};
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;

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
