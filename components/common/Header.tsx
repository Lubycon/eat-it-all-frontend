import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import GoToMapButton from "./GoToMapButton";
import { useRouter } from "next/router";
import { clickable } from "../../lib/style/mixin";

const Styled = {
  Root: styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  `,

  NavBar: styled.div`
    width: 1200px;
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled.img`
    ${clickable}
  `,
};

function Header() {
  const {
    query: { id: curationId },
  } = useRouter();

  return (
    <Styled.Root>
      <Styled.NavBar>
        <Link href="/">
          <Styled.Logo src="/assets/icons/logo.svg" />
        </Link>
        <GoToMapButton curationId={Number(curationId || 0)} />
      </Styled.NavBar>
    </Styled.Root>
  );
}

export default Header;
