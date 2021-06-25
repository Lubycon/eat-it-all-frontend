import React from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { 강남역 } from "../lib/constants";
import Place from "../components/map/Place";
import Spinner from "../components/common/Spinner";
import BackHomeIcon from "../components/map/BackHomeIcon";
import { modalRestaurantIdState } from "../store";
import { useGetRestaurants } from "../hooks/api/restaurant";
import overlayContent from "../components/map/overlayContent";
import RestaurantList from "../components/map/RestaurantList";
import CurationDropdown from "../components/map/CurationDropdown";
import RestaurantModal from "../components/common/RestaurantModal";
import KakaoMapContainer from "../components/map/KakaoMapContainer";
import { useMobile } from "../hooks/useMobile";

function Map() {
  const { data: allRestaurants } = useGetRestaurants();
  const {
    query: { curationId },
  } = useRouter();
  const modalRestaurantId = useRecoilValue(modalRestaurantIdState);

  const isMobile = useMobile();

  if (!allRestaurants) return <Spinner />;

  const restaurants =
    Number(curationId) === 0
      ? allRestaurants
      : allRestaurants.filter(({ curationIds }) => curationIds?.includes(String(curationId)));

  return (
    <>
      {isMobile || <BackHomeIcon />}
      <CurationDropdown />
      <KakaoMapContainer lat={강남역.lat} lng={강남역.lng} level={6}>
        {restaurants.map(({ id, name, kakaoMap: { latitude, longitude } }) => (
          <Place key={id} id={id} lat={latitude} lng={longitude} content={overlayContent(name)} />
        ))}
      </KakaoMapContainer>
      {isMobile || <RestaurantList />}
      {modalRestaurantId !== null && <RestaurantModal headerHeight={320} />}
    </>
  );
}

export default Map;
