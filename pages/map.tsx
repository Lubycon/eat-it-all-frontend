import React from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../lib/constants";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";

const Styled = {
  MapContainer: styled.div`
    height: 100vh;

    .overlay-background {
      background-color: #fff;
      padding: 12px;
    }
  `,
};

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>(
    "/restaurants",
    (url) => mockClient.get(url)
  );

  const contentTemplate = (name: string, hashTags: string[]) => `
    <div class="overlay-background">
      <div class="overlay-title">${name}</div>
      <div class="overlay-hashtags">${hashTags.map((hashTag) => hashTag)}</div>
    </div>
  `;

  React.useEffect(() => {
    if (kakaoMap == null || kakaoMap.current == null) return;

    const { kakao } = window;
    const options = {
      center: new kakao.maps.LatLng(강남역.lat, 강남역.lng),
      level: 4,
    };

    const map = new kakao.maps.Map(kakaoMap.current, options);

    restaurants?.map((restaurant) => {
      const overlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(
          restaurant.kakaoMap.mapLatitude,
          restaurant.kakaoMap.mapLongitude
        ),
        content: contentTemplate(restaurant.name, restaurant.hashtags),
      });

      overlay.setMap(map);
    });
  }, [restaurants]);

  return <Styled.MapContainer ref={kakaoMap} />;
}

export default Map;
