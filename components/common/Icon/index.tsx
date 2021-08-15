import React from 'react';

import * as svg from './svg';

type IconType = keyof typeof svg;

interface IconProps {
  name: IconType;
}

function Icon({ name }: IconProps) {
  return React.createElement(svg[name]);
}

export default Icon;
