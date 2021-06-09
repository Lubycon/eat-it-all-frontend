import React from "react";
import Link from "next/link";
import Header from "../components/common/Header";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Link href="/map">
        <button>지도로 이동</button>
      </Link>
    </>
  );
}

export default Home;
