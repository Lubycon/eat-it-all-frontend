import React from "react";
import { colors } from "../../lib/constants/colors";
import styled from "@emotion/styled";
import { useGetCuration } from "../../hooks/api/curation";
import CurationContent from "./CurationContent";

const Styled = {
  Root: styled.div`
    margin: 0 32px;
  `,

  Title: styled.div`
    font-weight: bold;
    font-size: 18px;
    color: ${colors.beige30};
    margin-bottom: 18px;
  `,
};

function MobileCategoryList() {
  const { data: curations } = useGetCuration();

  return (
    <Styled.Root>
      <Styled.Title>Category</Styled.Title>
      {curations?.map((curation) => (
        <CurationContent key={curation.id} title={curation.title} />
      ))}
    </Styled.Root>
  );
}

export default MobileCategoryList;
