import React from "react";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Overlay from "../components/map/Overlay";
import { 강남역 } from "../lib/constants";
import contentLayout from "../components/map/contentLayout";
import CurationList from "../components/map/CurationList";
import { useRouter } from "next/dist/client/router";
import { useGetRestaurant } from "../hooks/api/restaurant";

function Map() {
  const { data: restaurants } = useGetRestaurant();
  const {
    query: { curationId: selectedCurationId },
  } = useRouter();

  console.log(`restaurants`, restaurants);

  return (
    <>
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={4}>
        {restaurants?.map(({ id, name, hashtags, curationIds, kakaoMap: { latitude, longitude } }) => {
          const isSelected = curationIds.includes(String(selectedCurationId));

          return (
            <Overlay key={id} lat={longitude} lng={latitude} content={contentLayout(name, hashtags, isSelected)} />
          );
        })}
      </KakaoMapContainer>
      <CurationList />
    </>
  );
}

export default Map;
