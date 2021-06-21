import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    margin: 64px 0;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  `,

  Main: styled.div``,

  Title: styled.div`
    font-weight: bold;
    font-size: 24px;
    color: ${colors.gray90};
    margin-bottom: 6px;
  `,

  Address: styled.div`
    font-weight: 500;
    font-size: 14px;
    color: ${colors.beige30};
  `,
};

interface Props {
  name: string;
  hashTags: string[];
  address: string;
  imageUrl: string;
  description: string;
}

function CurationContentItem({ name, hashTags, address, imageUrl, description }: Props) {
  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Main>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Address>{address}</Styled.Address>
        </Styled.Main>
        <img src="/assets/icons/ic_arrow.svg" alt="상세보기" width={48} height={48} />
      </Styled.Header>
      <img src={`https://file.eat-all.io${imageUrl}`} alt="name" width={600} />
    </Styled.Root>
  );
}

export default CurationContentItem;
