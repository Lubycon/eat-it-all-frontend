import React from "react";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Overlay from "../components/map/Overlay";

function Map() {
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>(
    "/restaurants",
    (url) => mockClient.get(url)
  );

  return (
    <KakaoMapContainer>
      {restaurants?.map((restaurant) => (
        <Overlay
          key={restaurant.id}
          name={restaurant.name}
          hashTags={restaurant.hashtags}
          lat={restaurant.kakaoMap.mapLatitude}
          lng={restaurant.kakaoMap.mapLongitude}
        />
      ))}
    </KakaoMapContainer>
  );
}

export default Map;
