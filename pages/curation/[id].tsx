import { useRouter } from "next/dist/client/router";
import React from "react";
import { useGetCuration } from "../../hooks/api/curation";

function Curation() {
  const {
    query: { id: curationId },
  } = useRouter();

  const { data: curation } = useGetCuration(Number(curationId));

  return <div style={{ fontSize: "40px" }}>{curation?.title}</div>;
}

export default Curation;
