import React from "react";
import styled from "@emotion/styled";

const Styled = {
  MapContainer: styled.div`
    width: 500px;
    height: 500px;
  `,
};

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  React.useEffect(() => {
    const { kakao } = window;

    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    new kakao.maps.Map(container, options);
  }, []);

  return <Styled.MapContainer id="map"></Styled.MapContainer>;
}

export default Map;
