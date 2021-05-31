declare global {
  interface Window {
    kakao: any;
  }
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Map {
  center: LatLng;
  level: number;
}

export interface ICustomOverlayOptions {
  clickable: boolean;
  content: Node | string;
  map: Map;
  position: LatLng;
  xAnchor: number;
  yAnchor: number;
  zIndex: number;
}
