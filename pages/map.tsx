import React from "react";
import { useRouter } from "next/router";
import { 강남역 } from "../lib/constants";
import Place from "../components/map/Place";
import useWindowSize from "../hooks/useWindowSize";
import { useGetRestaurant } from "../hooks/api/restaurant";
import overlayContent from "../components/map/overlayContent";
import RestaurantList from "../components/map/RestaurantList";
import CurationDropdown from "../components/map/CurationDropdown";
import KakaoMapContainer from "../components/map/KakaoMapContainer";

function Map() {
  const { data: allRestaurants } = useGetRestaurant();
  const {
    query: { curationId },
  } = useRouter();

  const restaurants =
    Number(curationId) === 0
      ? allRestaurants
      : allRestaurants?.filter(({ curationIds }) => curationIds?.includes(String(curationId)));

  const size = useWindowSize();
  const isDesktop = size && size.width > 768;

  return (
    <>
      <CurationDropdown />
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={6}>
        {restaurants?.map(({ id, name, kakaoMap: { latitude, longitude } }) => (
          <Place key={id} lat={latitude} lng={longitude} content={overlayContent(name)} />
        ))}
      </KakaoMapContainer>
      {isDesktop && <RestaurantList />}
    </>
  );
}

export default Map;
