import React from "react";
import Main from "../components/home/Main";
import Header from "../components/common/Header";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <div style={{ height: "1400px", backgroundColor: "blue" }} />
    </>
  );
}

export default Home;
