import React from "react";
import styled from "@emotion/styled";
import GoToMapButton from "./GoToMapButton";

const Styled = {
  Root: styled.div`
    position: sticky;
    top: 0;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  NavBar: styled.div`
    width: 1200px;
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function Header() {
  return (
    <Styled.Root>
      <Styled.NavBar>
        <div style={{ fontSize: "32px" }}>Logo</div>
        <GoToMapButton />
      </Styled.NavBar>
    </Styled.Root>
  );
}

export default Header;
