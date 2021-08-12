import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { clickable } from '../../lib/style/mixin';
import GoToMapButton from './GoToMapButton';

const Styled = {
  Root: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    z-index: 20;
    width: 100%;
    height: 96px;
  `,

  NavBar: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 1200px;
    height: 100%;
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
