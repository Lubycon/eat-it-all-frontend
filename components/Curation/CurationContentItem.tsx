import styled from '@emotion/styled';
import React from 'react';
import { useSetRecoilState } from 'recoil';

import { colors } from '../../lib/constants/colors';
import { clickable } from '../../lib/style/mixin';
import { eatAllFileUrl } from '../../lib/utils/path';
import { modalRestaurantIdState } from '../../store';

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
    margin-bottom: 8px;
    color: ${colors.gray90};
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
      margin-bottom: 6px;
      font-size: 18px;
    }
  `,

  Address: styled.div`
    margin-bottom: 12px;
    color: ${colors.beige30};
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
      margin-bottom: 8px;
      font-size: 12px;
    }
  `,

  TagWrapper: styled.div`
    display: flex;
  `,

  Tag: styled.div`
    margin-right: 6px;
    border-radius: 5px;
    background-color: ${colors.beige10};
    padding: 4px 6px;
    color: ${colors.beige40};
    font-size: 14px;
    font-weight: 500;

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
    margin-bottom: 18px;
    border-radius: 2px;
    width: 100%;
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
      <Styled.ThumbnailImage src={eatAllFileUrl(imageUrl)} alt={name} />
      <div className="description">{description}</div>
    </Styled.Root>
  );
}

export default CurationContentItem;
