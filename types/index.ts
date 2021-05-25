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
