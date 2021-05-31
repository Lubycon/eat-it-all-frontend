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
        {restaurants?.map(({ id, name, hashtags, kakaoMap: { mapLatitude, mapLongitude } }) => (
          <Overlay key={id} lat={mapLatitude} lng={mapLongitude} content={contentLayout(name, hashtags)} />
        ))}
      </KakaoMapContainer>
      <CurationList />
    </>
  );
}

export default Map;
