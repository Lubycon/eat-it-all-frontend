import React from "react";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Overlay from "../components/map/Overlay";
import { 강남역 } from "../lib/constants";

function Map() {
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>("/restaurants", (url) => mockClient.get(url));

  const contentLayout = (name: string, hashTags: string[]) => `
    <div class="overlay-background" onclick="https://apis.map.kakao.com/web/sample/customOverlay1/" >
      <a href="https://map.kakao.com/link/map/11394059" target="_blank">
        <div class="overlay-title">${name}</div>
        <div class="overlay-hashtags">${hashTags.map((hashTag) => hashTag)}</div>
      </a>
    </div>
  `;

  return (
    <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={4}>
      {restaurants?.map((restaurant) => (
        <Overlay
          key={restaurant.id}
          lat={restaurant.kakaoMap.mapLatitude}
          lng={restaurant.kakaoMap.mapLongitude}
          content={contentLayout(restaurant.name, restaurant.hashtags)}
        />
      ))}
    </KakaoMapContainer>
  );
}

export default Map;
