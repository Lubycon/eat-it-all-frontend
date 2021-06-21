import { useRouter } from "next/dist/client/router";
import React from "react";
import { useGetCuration } from "../../hooks/api/curation";

function Curation() {
  const router = useRouter();
  const {
    query: { id: curationId },
  } = router;
  const { data } = useGetCuration(Number(curationId));

  return <div></div>;
}

export default Curation;
