import React from "react";
import styled from "@emotion/styled";
import { 강남역 } from "../../lib/constants";

const Styled = {
  Root: styled.div`
    height: 100vh;

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
  children: React.ReactNode;
}

function MapContainer({ children: overlays }: Props) {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  console.log(`overlays`, overlays);

  const contentTemplate = (name: string, hashTags: string[]) => `
    <div class="overlay-background" onclick="https://apis.map.kakao.com/web/sample/customOverlay1/" >
      <a href="https://map.kakao.com/link/map/11394059" target="_blank">
        <div class="overlay-title">${name}</div>
        <div class="overlay-hashtags">${hashTags.map(
          (hashTag) => hashTag
        )}</div>
      </a>
    </div>
  `;

  React.useEffect(() => {
    if (kakaoMap == null || kakaoMap.current == null) return;

    const { kakao } = window;

    const initialOptions = {
      center: new kakao.maps.LatLng(강남역.lat, 강남역.lng),
      level: 4,
    };

    const map = new kakao.maps.Map(kakaoMap.current, initialOptions);

    (overlays as React.ReactNode[])?.map((overlayItem) => {
      const { name, hashTags, lat, lng } = overlayItem?.props;

      const overlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lng),
        content: contentTemplate(name, hashTags),
      });

      console.log(`overlay`, overlay);

      overlay.setMap(map);
    });
  }, []);

  return <Styled.Root ref={kakaoMap} />;
}

export default MapContainer;
