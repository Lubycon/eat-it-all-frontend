import React from 'react';

import * as svg from './svg';

type IconType = keyof typeof svg;

export interface IconProps {
  name: IconType;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  color?: string;
}

function Icon({ name, className, style, width, height, color }: IconProps) {
  return React.createElement(svg[name], {
    className,
    width,
    height,
    fill: color,
    style,
  });
}

export default Icon;
