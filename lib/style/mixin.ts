import { css } from "@emotion/react";

const mixin = {
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
    pointer-events: all;
  `,
};

export default mixin;
