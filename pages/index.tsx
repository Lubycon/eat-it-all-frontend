import React from "react";
import Main from "../components/home/Main";
import Header from "../components/common/Header";
import MobileCategoryList from "../components/home/MobileCategoryList";
import { useMobile } from "../hooks/useMobile";
import { useSetRecoilState } from "recoil";
import { modalRestaurantIdState } from "../store";

function Home() {
  const isMobile = useMobile();
  const setModalRestaurantId = useSetRecoilState(modalRestaurantIdState);

  React.useEffect(() => {
    setModalRestaurantId(null);
  }, []);

  return (
    <>
      <Header />
      <Main />
      {isMobile && <MobileCategoryList />}
    </>
  );
}

export default Home;
