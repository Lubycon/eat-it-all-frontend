import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { MouseEvent, MouseEventHandler, useCallback } from 'react';

import Icon, { IconProps } from './Icon';

type IconButtonProps = {
  to: string;
  routerType: 'push' | 'replace';
  onClick: MouseEventHandler<HTMLButtonElement>;
} & IconProps;

function IconButton({
  name,
  className,
  style,
  width,
  height,
  color,
  to,
  routerType,
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
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  `,
};

export default IconButton;
