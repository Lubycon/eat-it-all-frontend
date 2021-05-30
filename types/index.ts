declare global {
  interface Window {
    kakao: any;
  }
}

export interface IRestaurants {
  data: IRestaurant[];
}

export interface IRestaurant {
  id: number;
  name: string;
  hashtags: string[];
  thumbnailImageUrl: string;
  address: string;
  kakaoMap: {
    id: number;
    mapLatitude: number;
    mapLongitude: number;
  };
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
