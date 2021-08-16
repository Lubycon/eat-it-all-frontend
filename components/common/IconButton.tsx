import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { MouseEvent, MouseEventHandler, useCallback } from 'react';

import { clickable } from '../../lib/style/mixin';
import Icon, { IconProps } from './Icon';

type routerType = 'push' | 'replace';

type IconButtonProps = {
  to?: string;
  routerType?: routerType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & IconProps;

function IconButton({
  name,
  className,
  style,
  width,
  height,
  color,
  to,
  routerType = 'push',
  onClick,
}: IconButtonProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
      if (to) {
        router[routerType](to);
      }
    },
    [to, routerType, onClick, router],
  );

  return (
    <Styled.IconButton onClick={handleClick} width={width} height={height}>
      <Icon
        name={name}
        className={className}
        style={style}
        width={width}
        height={height}
        color={color}
      />
    </Styled.IconButton>
  );
}

const Styled = {
  IconButton: styled.button<{ width?: number; height?: number }>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: transparent;

    ${({ width }) => width && `width: ${width}px`};
    ${({ height }) => height && `height: ${height}px`};
    ${clickable}
  `,
};

export default IconButton;
