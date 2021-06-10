import React from "react";
import styled from "@emotion/styled";
import Carousel from "../common/Carousel";
import { colors } from "../../lib/constants/colors";
import Slider from "react-slick";

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
  const sliderProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Styled.Title>Category</Styled.Title>
      <Slider {...sliderProps}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
