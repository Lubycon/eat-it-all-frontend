import React from "react";
import styled from "@emotion/styled";
import Carousel from "../common/Carousel";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    width: 100%;
  `,

  Title: styled.div`
    font-weight: bold;
    font-size: 18px;
    color: ${colors.beige30};
    padding: 10px;
    margin-bottom: 18px;
  `,
};

function CategoryCarousel() {
  return (
    <div>
      <Styled.Title>Category</Styled.Title>
      <Carousel />
    </div>
  );
}

export default CategoryCarousel;
