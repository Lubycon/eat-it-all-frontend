import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useGetCuration, useGetCurations } from "../../hooks/api/curation";
import CurationContent from "./CurationContent";

const Styled = {
  Root: styled.div`
    width: 1200px;
    padding: 0 16px;

    @media (max-width: calc(1200px + 32px)) {
      width: 960px;
    }

    @media (max-width: calc(1024px + 32px)) {
      width: calc(768px - 32px);
    }

    .slick-arrow {
      &:before {
        color: ${colors.green50};
        font-size: 24px;
      }
    }
  `,

  Title: styled.div`
    font-weight: bold;
    font-size: 18px;
    color: ${colors.beige30};
    padding: 10px;
    margin-bottom: 18px;
  `,

  SliderItem: styled.div`
    padding: 8px;
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
      breakpoint: 1232,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
};

function CategoryCarousel() {
  const { data: curations } = useGetCurations();

  return (
    <Styled.Root>
      <Styled.Title>Category</Styled.Title>
      <Slider {...sliderProps}>
        {curations?.map((curation) => (
          <Styled.SliderItem key={curation.id}>
            <CurationContent title={curation.title} height={200} />
          </Styled.SliderItem>
        ))}
      </Slider>
    </Styled.Root>
  );
}

export default CategoryCarousel;
