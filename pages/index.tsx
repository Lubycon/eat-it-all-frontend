import React from "react";
import Link from "next/link";
import Header from "../components/common/Header";
import Main from "../components/home/Main";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <div style={{ height: "400px", backgroundColor: "blue" }} />
    </>
  );
}

export default Home;
