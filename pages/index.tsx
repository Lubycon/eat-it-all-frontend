import React from "react";
import Main from "../components/home/Main";
import Header from "../components/common/Header";
import { colors } from "../lib/constants/colors";
import MobileCategoryList from "../components/home/MobileCategoryList";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const size = useWindowSize();
  const isMobile = size && size.width < 768;

  return (
    <>
      <Header />
      <Main />
      {isMobile && <MobileCategoryList />}
      <div style={{ height: "1400px", backgroundColor: colors.beige30 }} />
    </>
  );
}

export default Home;
