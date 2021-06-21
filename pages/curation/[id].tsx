import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useGetCuration } from "../../hooks/api/curation";

const Styled = {
  Header: styled.div<{ image?: string }>`
    font-weight: bold;
    font-size: 48px;
    height: 400px;
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `,
};

function Curation() {
  const {
    query: { id: curationId },
  } = useRouter();

  const { data: curation } = useGetCuration(Number(curationId));

  return (
    <div>
      <Styled.Header image={`https://file.eat-all.io${curation?.imageUrl}`}>{curation?.title}</Styled.Header>;
      <div style={{ height: "2400px" }} />
    </div>
  );
}

export default Curation;
