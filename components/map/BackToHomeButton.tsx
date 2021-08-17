import styled from '@emotion/styled';
import React from 'react';

import IconButton from '../common/IconButton';

const Styled = {
  Root: styled(IconButton)`
    position: absolute;
    top: 36px;
    left: 48px;
    z-index: 10;
    width: 68px;
    height: 68px;
  `,
};

function BackToHomeButton() {
  return <Styled.Root name="arrow_left_circle" to="/" />;
}

export default BackToHomeButton;
