declare global {
  interface Window {
    kakao: {
      maps: {
        Map: any;
        CustomOverlay: any;
        Size: any;
        Point: any;
        MarkerImage: any;
        LatLng: any;
        Marker: any;
      };
    };
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
