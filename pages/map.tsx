import React from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../lib/constants";

const Styled = {
  MapContainer: styled.div`
    height: 100vh;
  `,
};

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (kakaoMap == null || kakaoMap.current == null) return;

    const { kakao } = window;
    const options = {
      center: new kakao.maps.LatLng(강남역.lat, 강남역.lng),
      level: 4,
    };

    new kakao.maps.Map(kakaoMap.current, options);
  }, []);

  return <Styled.MapContainer ref={kakaoMap} />;
}

export default Map;