import React, { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../../lib/constants";

const Styled = {
  Root: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
};

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  width?: string;
  height?: string;
  lat?: number;
  lng?: number;
  level?: number;
  children: ReactNode;
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
    if (kakaoMap == null || kakaoMap.current == null) return;

    const { kakao } = window;

    const initialOptions = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };

    const map = new kakao.maps.Map(kakaoMap.current, initialOptions);

    (overlayNodes as ReactElement[])?.map((overlayNode) => {
      const { lat, lng, content } = (overlayNode as ReactElement)?.props;

      const overlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lng),
        content: content,
      });

      overlay.setMap(map);
    });
  }, [overlayNodes]);

  return <Styled.Root ref={kakaoMap} width={width} height={height} />;
}

export default KakaoMapContainer;
