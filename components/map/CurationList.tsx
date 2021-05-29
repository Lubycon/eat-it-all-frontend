import React from "react";
import { useGetCuration } from "../../hooks/api";

function CurationList() {
  const { data } = useGetCuration();
  console.log(`data`, data);

  return <div>CurationList</div>;
}

export default CurationList;
