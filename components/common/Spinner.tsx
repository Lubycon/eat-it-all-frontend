import styled from "@emotion/styled";
import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface Props {
  size?: number;
}

function Spinner({ size = 60 }: Props) {
  return (
    <Styled.Root>
      <MoonLoader color={colors.green50} size={size} />
    </Styled.Root>
  );
}

export default Spinner;
