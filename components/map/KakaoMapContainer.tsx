import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import marker from "./marker";
import overlay from "./overlay";
import { PlaceProps } from "./Place";
import { 강남역 } from "../../lib/constants";
import { useRouter } from "next/router";

const Styled = {
  Root: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
};

interface Props {
  width?: string;
  height?: string;
  lat?: number;
  lng?: number;
  level?: number;
  children: ReactElement<PlaceProps>[];
}

function KakaoMapContainer({
  width = "auto",
  height = "100vh",
  lat = 강남역.lat,
  lng = 강남역.lng,
  level = 3,
  children: places,
}: Props) {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  const {
    query: { curationId },
  } = useRouter();

  React.useEffect(() => {
    const { kakao } = window;

    const initialOptions = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };

    const map = new kakao.maps.Map(kakaoMap.current, initialOptions);

    React.Children.map(places, (place) => {
      const { lat, lng, content } = place.props;

      marker(lat, lng).setMap(map);
      overlay(marker(lat, lng).getPosition(), content).setMap(map);
    });
  }, [curationId]);

  return <Styled.Root ref={kakaoMap} width={width} height={height} />;
}

export default KakaoMapContainer;
