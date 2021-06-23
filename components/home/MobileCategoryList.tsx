import React from "react";
import { colors } from "../../lib/constants/colors";
import styled from "@emotion/styled";
import { useGetCurations } from "../../hooks/api/curation";
import CurationContent from "./CurationContent";

const Styled = {
  Root: styled.div`
    margin: 0 32px;
  `,

  Title: styled.div`
    font-weight: bold;
    font-size: 18px;
    color: ${colors.beige30};
    margin-bottom: 32px;
  `,

  CategoryItem: styled.div`
    margin-bottom: 16px;
  `,
};

function MobileCategoryList() {
  const { data: curations } = useGetCurations();

  return (
    <Styled.Root>
      <Styled.Title>Category</Styled.Title>
      {curations?.map((curation) => {
        return (
          <Styled.CategoryItem key={curation.id}>
            <CurationContent title={curation.title} height={126} />
          </Styled.CategoryItem>
        );
      })}
    </Styled.Root>
  );
}

export default MobileCategoryList;
