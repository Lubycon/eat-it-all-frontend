import { css } from '@emotion/react';

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const clickable = css`
  cursor: pointer;
  user-select: none;
  pointer-events: all;
`;

export default { truncateText, clickable };
