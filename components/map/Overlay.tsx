import React from "react";

interface Props {
  name: string;
  hashTags: string[];
  lat: number;
  lng: number;
}

function Overlay({ name, hashTags, lat, lng }: Props) {
  return <div>Overlay</div>;
}

export default Overlay;
