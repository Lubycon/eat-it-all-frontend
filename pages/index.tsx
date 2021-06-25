import React from "react";
import Main from "../components/home/Main";
import Header from "../components/common/Header";
import { colors } from "../lib/constants/colors";
import MobileCategoryList from "../components/home/MobileCategoryList";
import { useMobile } from "../hooks/useMobile";

function Home() {
  const isMobile = useMobile();

  return (
    <>
      <Header />
      <Main />
      {isMobile && <MobileCategoryList />}
    </>
  );
}

export default Home;
