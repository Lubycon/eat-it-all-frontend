import React, { FC } from "react";
import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    height: 100vh;

    .overlay-background {
      background-color: #fff;
      padding: 12px;
      border-radius: 12px;
    }
  `,
};

interface Props {
  ref: React.Ref<HTMLDivElement>;
}

const MapContainer: FC<Props> = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return <Styled.Root ref={ref}></Styled.Root>;
  }
);

export default MapContainer;
