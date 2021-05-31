import React from "react";
import useSWR from "swr";
import { mockClient } from "../lib/api";
import { IRestaurants } from "../types";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Overlay from "../components/map/Overlay";
import { 강남역 } from "../lib/constants";
import contentLayout from "../components/map/contentLayout";
import CurationList from "../components/map/CurationList";
import { useRouter } from "next/dist/client/router";

function Map() {
  const { data: { data: restaurants } = {} } = useSWR<IRestaurants>("/restaurants", (url) => mockClient.get(url));
  const {
    query: { selectedCurationId },
  } = useRouter();

  return (
    <>
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={4}>
        {restaurants?.map(({ id, name, hashtags, curationId, kakaoMap: { mapLatitude, mapLongitude } }) => {
          const isSelected = Number(selectedCurationId) === curationId;

          return (
            <Overlay
              key={id}
              lat={mapLatitude}
              lng={mapLongitude}
              content={contentLayout(name, hashtags, isSelected)}
            />
          );
        })}
      </KakaoMapContainer>
      <CurationList />
    </>
  );
}

export default Map;
