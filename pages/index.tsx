import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/map">
        <button>지도로 이동</button>
      </Link>
    </div>
  );
}

export default Home;
