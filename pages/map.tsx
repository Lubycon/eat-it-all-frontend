import React from "react";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import Place from "../components/map/Place";
import { 강남역 } from "../lib/constants";
import overlayContent from "../components/map/overlayContent";
import RestaurantList from "../components/map/RestaurantList";
import { useGetRestaurant } from "../hooks/api/restaurant";
import useWindowSize from "../hooks/useWindowSize";

function Map() {
  const { data: restaurants } = useGetRestaurant();
  console.log(`restaurants`, restaurants);

  const size = useWindowSize();
  const isDesktop = size && size.width > 768;

  return (
    <>
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={4}>
        {restaurants?.map(({ id, name, kakaoMap: { latitude, longitude } }) => (
          <Place key={id} lat={latitude} lng={longitude} content={overlayContent(name)} />
        ))}
      </KakaoMapContainer>
      {isDesktop && <RestaurantList />}
    </>
  );
}

export default Map;
