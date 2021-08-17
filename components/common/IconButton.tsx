import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { MouseEvent, MouseEventHandler, useCallback } from 'react';

import { clickable, removeDefaultButtonStyle } from '../../lib/style/mixin';
import Icon, { IconProps } from './Icon';

type routerType = 'push' | 'replace';

type IconButtonProps = {
  to?: string;
  routerType?: routerType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & Omit<IconProps, 'width' | 'height'>;

function IconButton({
  name,
  className,
  style,
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
    <Styled.IconButton onClick={handleClick} className={className} style={style}>
      <Icon
        name={name}
        color={color}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Styled.IconButton>
  );
}

const Styled = {
  IconButton: styled.button`
    ${removeDefaultButtonStyle}
    ${clickable}
  `,
};

export default IconButton;
