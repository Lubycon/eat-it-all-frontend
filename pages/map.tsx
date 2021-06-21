import React from "react";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Place from "../components/map/Place";
import { 강남역 } from "../lib/constants";
import overlayContent from "../components/map/overlayContent";
import CurationList from "../components/map/CurationList";
import { useGetRestaurant } from "../hooks/api/restaurant";

function Map() {
  const { data: restaurants } = useGetRestaurant();
  console.log(`restaurants`, restaurants);

  return (
    <>
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={4}>
        {restaurants?.map(({ id, name, hashtags, kakaoMap: { latitude, longitude } }) => (
          <Place key={id} lat={latitude} lng={longitude} content={overlayContent(name)} />
        ))}
      </KakaoMapContainer>
      <CurationList />
    </>
  );
}

export default Map;
