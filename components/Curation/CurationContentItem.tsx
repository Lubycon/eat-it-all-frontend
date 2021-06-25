import styled from "@emotion/styled";
import React from "react";
import { useSetRecoilState } from "recoil";
import { colors } from "../../lib/constants/colors";
import { clickable } from "../../lib/style/mixin";
import { modalRestaurantIdState } from "../../store";

const Styled = {
  Root: styled.div`
    margin: 64px 0;
    ${clickable};
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  `,

  Main: styled.div``,

  Title: styled.div`
    font-weight: bold;
    font-size: 24px;
    color: ${colors.gray90};
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 6px;
    }
  `,

  Address: styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 12px;
    color: ${colors.beige30};

    @media (max-width: 768px) {
      font-size: 12px;
      margin-bottom: 8px;
    }
  `,

  TagWrapper: styled.div`
    display: flex;
  `,

  Tag: styled.div`
    border-radius: 5px;
    margin-right: 6px;
    color: ${colors.beige40};
    background-color: ${colors.beige10};
    padding: 4px 6px;
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,

  ArrowIcon: styled.img`
    width: 48px;
    height: 48px;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `,

  ThumbnailImage: styled.img`
    width: 100%;
    border-radius: 2px;
    margin-bottom: 18px;
  `,
};

interface Props {
  id: number;
  name: string;
  hashTags: string[];
  address: string;
  imageUrl: string;
  description: string;
}

function CurationContentItem({ id, name, hashTags, address, imageUrl, description }: Props) {
  const setModalRestaurantId = useSetRecoilState(modalRestaurantIdState);

  return (
    <Styled.Root onClick={() => setModalRestaurantId(id)}>
      <Styled.Header>
        <Styled.Main>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Address>{address}</Styled.Address>
          <Styled.TagWrapper>
            {hashTags.map((hashTag) => (
              <Styled.Tag key={hashTag}>{hashTag}</Styled.Tag>
            ))}
          </Styled.TagWrapper>
        </Styled.Main>
        <Styled.ArrowIcon src="/assets/icons/ic_arrow.svg" alt="상세보기" />
      </Styled.Header>
      <Styled.ThumbnailImage src={`https://file.eat-all.io${imageUrl}`} alt={name} />
      <div className="description">{description}</div>
    </Styled.Root>
  );
}

export default CurationContentItem;
