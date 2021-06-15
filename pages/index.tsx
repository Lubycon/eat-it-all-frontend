import React from "react";
import Main from "../components/home/Main";
import Header from "../components/common/Header";
import { colors } from "../lib/constants/colors";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <div style={{ height: "1400px", backgroundColor: colors.beige30 }} />
    </>
  );
}

export default Home;
