import React, { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../../lib/constants";

const Styled = {
  Root: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    .overlay-background {
      background-color: #fff;
      padding: 12px;
      border-radius: 12px;
    }
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
  level: number;
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

  const contentTemplate = (name: string, hashTags: string[]) => `
    <div class="overlay-background" onclick="https://apis.map.kakao.com/web/sample/customOverlay1/" >
      <a href="https://map.kakao.com/link/map/11394059" target="_blank">
        <div class="overlay-title">${name}</div>
        <div class="overlay-hashtags">${hashTags.map((hashTag) => hashTag)}</div>
      </a>
    </div>
  `;

  React.useEffect(() => {
    if (kakaoMap == null || kakaoMap.current == null) return;

    const { kakao } = window;

    const initialOptions = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };

    const map = new kakao.maps.Map(kakaoMap.current, initialOptions);

    (overlayNodes as ReactElement[])?.map((overlayNode) => {
      const { name, hashTags, lat, lng } = (overlayNode as ReactElement)?.props;

      const overlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lng),
        content: contentTemplate(name, hashTags),
      });

      overlay.setMap(map);
    });
  }, [overlayNodes]);

  return <Styled.Root ref={kakaoMap} width={width} height={height} />;
}

export default KakaoMapContainer;
