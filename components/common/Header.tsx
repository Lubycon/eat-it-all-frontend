import React from "react";
import styled from "@emotion/styled";

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
        <div>Logo</div>
        <img src="/assets/icons/map_ivory.svg" />
      </Styled.NavBar>
    </Styled.Root>
  );
}

export default Header;
