import React from "react";
import styled from "@emotion/styled";

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

const 강남역 = {
  lat: 37.498122,
  lng: 127.027683,
};

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

  return <Styled.MapContainer ref={kakaoMap}></Styled.MapContainer>;
}

export default Map;
