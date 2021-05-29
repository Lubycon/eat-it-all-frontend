import React from "react";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Overlay from "../components/map/Overlay";
import { 강남역 } from "../lib/constants";
import contentLayout from "../components/map/contentLayout";
import CurationList from "../components/map/CurationList";

function Map() {
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>("/restaurants", (url) => mockClient.get(url));

  return (
    <>
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
      <CurationList />
    </>
  );
}

export default Map;
