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

export const removeDefaultButtonStyle = css`
  outline: inherit;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
  font: inherit;
`;

export default { truncateText, clickable };
