import styled from '@emotion/styled';
import React from 'react';

import { useGetCurations } from '../../hooks/api/curation';
import { colors } from '../../lib/constants/colors';
import Emoji from '../common/Emoji';
import CurationContent from './CurationContent';

const Styled = {
  Root: styled.div`
    margin: 80px 32px;
  `,

  Title: styled.div`
    margin-bottom: 24px;
    color: ${colors.beige30};
    font-size: 18px;
    font-weight: bold;
  `,

  CategoryItem: styled.div`
    margin-bottom: 16px;
  `,
};

function MobileCategoryList() {
  const { data: curations } = useGetCurations();

  return (
    <Styled.Root>
      <Styled.Title>
        <Emoji name="샐러드" /> 상황에 맞는 큐레이션을 선택해보세요
      </Styled.Title>
      {curations?.map((curation) => {
        return (
          <Styled.CategoryItem key={curation.id}>
            <CurationContent
              id={curation.id}
              title={curation.title}
              height={126}
              imageUrl={curation.imageUrl}
            />
          </Styled.CategoryItem>
        );
      })}
    </Styled.Root>
  );
}

export default MobileCategoryList;
