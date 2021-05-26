export interface IRestaurants {
  data: IRestaurant[];
}

export interface IRestaurant {
  restaurantId: number;
  name: string;
  hashtags: string[];
  thumbnailImageUrl: string;
  address: string;
  kakaoMap: {
    kakaoMapId: number;
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
