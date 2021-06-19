import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../../lib/constants";
import { OverlayProps } from "./Overlay";
import marker from "./Marker";

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
  children?: ReactElement<OverlayProps>[];
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
  const [ka, setKa] = React.useState<any>(null);
  console.log(`ka`, ka);

  React.useEffect(() => {
    const { kakao } = window;
    setKa(kakao);
  }, []);

  const initialOptions = {
    center: new ka.maps.LatLng(lat, lng),
    level,
  };

  const map = new ka.maps.Map(kakaoMap.current, initialOptions);

  overlayNodes &&
    React.Children.map(overlayNodes, (overlayNode) => {
      const { lat, lng, content } = overlayNode.props;

      marker(lat, lng, map);

      const overlay = new ka.maps.CustomOverlay({
        map: map,
        content: content,
        position: marker(lat, lng, map).getPosition(),
        yAnchor: 1.5,
      });
    });

  return <Styled.Root ref={kakaoMap} width={width} height={height} />;
}

export default KakaoMapContainer;
