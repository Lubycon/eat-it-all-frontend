import styled from '@emotion/styled';
import React from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import IconButton from './IconButton';

const Styled = {
  Root: styled(IconButton)`
    position: absolute;
    bottom: 20px;
  `,
};

function ScrollDownButton() {
  const size = useWindowSize();

  const scrollDown = () => {
    window.scrollTo({ top: size?.height, behavior: 'smooth' });
  };

  return <Styled.Root name="arrow_down_wide" onClick={scrollDown} />;
}

export default ScrollDownButton;
