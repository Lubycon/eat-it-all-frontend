import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../../lib/constants";
import { PlaceProps } from "./Place";
import marker from "./marker";

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
  children?: ReactElement<PlaceProps>[];
}

function KakaoMapContainer({
  width = "auto",
  height = "100vh",
  lat = 강남역.lat,
  lng = 강남역.lng,
  level = 4,
  children: overlayNodes,
}: Props) {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const { kakao } = window;

    const initialOptions = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };

    const map = new kakao.maps.Map(kakaoMap.current, initialOptions);

    overlayNodes &&
      React.Children.map(overlayNodes, (overlayNode) => {
        const { lat, lng, content } = overlayNode.props;

        marker(lat, lng).setMap(map);

        const overlay = new kakao.maps.CustomOverlay({
          content: content,
          position: marker(lat, lng).getPosition(),
          yAnchor: 1.5,
        });

        overlay.setMap(map);
      });
  }, [overlayNodes]);

  return <Styled.Root ref={kakaoMap} width={width} height={height} />;
}

export default KakaoMapContainer;
