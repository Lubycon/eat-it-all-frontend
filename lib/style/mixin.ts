import { css } from "@emotion/react";

export const truncateText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const clickable = css`
  cursor: pointer;
  user-select: none;
  pointer-events: all;
`;

export default { truncateText, clickable };
