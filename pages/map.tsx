import React from "react";
import { 강남역 } from "../lib/constants";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";
import MapContainer from "../components/map/MapContainer";
import Overlay from "../components/map/Overlay";

function Map() {
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>(
    "/restaurants",
    (url) => mockClient.get(url)
  );

  return (
    <MapContainer>
      {restaurants?.map((restaurant) => (
        <Overlay
          key={restaurant.id}
          name={restaurant.name}
          hashTags={restaurant.hashtags}
          lat={restaurant.kakaoMap.mapLatitude}
          lng={restaurant.kakaoMap.mapLongitude}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
