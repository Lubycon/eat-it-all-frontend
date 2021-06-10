import React from "react";
import styled from "@emotion/styled";
import Carousel from "../common/Carousel";
import { colors } from "../../lib/constants/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

const Styled = {
  Root: styled.div`
    /* width: 100%; */
  `,

  Title: styled.div`
    font-weight: bold;
    font-size: 18px;

    color: ${colors.beige30};
    padding: 10px;
    margin-bottom: 18px;
  `,

  SliderItem: styled.div`
    height: 200px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid red;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const sliderProps: Settings = {
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CategoryCarousel() {
  return (
    <div>
      <Styled.Title>Category</Styled.Title>
      <Slider {...sliderProps}>
        <Styled.SliderItem>1</Styled.SliderItem>
        <Styled.SliderItem>2</Styled.SliderItem>
        <Styled.SliderItem>3</Styled.SliderItem>
        <Styled.SliderItem>4</Styled.SliderItem>
        <Styled.SliderItem>5</Styled.SliderItem>
        <Styled.SliderItem>6</Styled.SliderItem>
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
