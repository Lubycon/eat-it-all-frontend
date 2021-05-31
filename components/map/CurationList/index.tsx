import styled from "@emotion/styled";
import React from "react";
import { useGetCuration } from "../../../hooks/api";
import CurationItem from "./CurationItem";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 72px;
    bottom: 72px;
    overflow-x: scroll;
    right: 40px;
    z-index: 999;
  `,
};

function CurationList() {
  const { data: curations } = useGetCuration();

  return (
    <Styled.Root>
      {curations?.map((curation) => (
        <CurationItem
          key={curation.id}
          id={curation.id}
          title={curation.title}
          description="설명설명설명설명설명설명설명설명설명"
        />
      ))}
    </Styled.Root>
  );
}

export default CurationList;
