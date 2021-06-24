import React from "react";
import { useRouter } from "next/router";
import { 강남역 } from "../lib/constants";
import Place from "../components/map/Place";
import Spinner from "../components/common/Spinner";
import useWindowSize from "../hooks/useWindowSize";
import { useGetRestaurants } from "../hooks/api/restaurant";
import overlayContent from "../components/map/overlayContent";
import RestaurantList from "../components/map/RestaurantList";
import CurationDropdown from "../components/map/CurationDropdown";
import RestaurantModal from "../components/common/RestaurantModal";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import { useRecoilValue } from "recoil";
import { modalRestaurantIdState } from "../store/mapStore";

function Map() {
  const { data: allRestaurants } = useGetRestaurants();
  const {
    query: { curationId },
  } = useRouter();
  const modalRestaurantId = useRecoilValue(modalRestaurantIdState);

  const size = useWindowSize();
  const isDesktop = size && size.width > 768;

  if (!allRestaurants) return <Spinner />;

  const restaurants =
    Number(curationId) === 0
      ? allRestaurants
      : allRestaurants.filter(({ curationIds }) => curationIds?.includes(String(curationId)));

  return (
    <>
      <CurationDropdown />
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={6}>
        {restaurants.map(({ id, name, kakaoMap: { latitude, longitude } }) => (
          <Place key={id} id={id} lat={latitude} lng={longitude} content={overlayContent(name)} />
        ))}
      </KakaoMapContainer>
      {isDesktop && <RestaurantList />}
      {modalRestaurantId !== null && <RestaurantModal />}
    </>
  );
}

export default Map;
