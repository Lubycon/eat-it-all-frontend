import styled from '@emotion/styled';
import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import { colors } from '../../lib/constants/colors';

const Styled = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
};

interface Props {
  size?: number;
}

function Spinner({ size = 60 }: Props) {
  return (
    <Styled.Root>
      <MoonLoader color={colors.green50} size={size} />
    </Styled.Root>
  );
}

export default Spinner;
