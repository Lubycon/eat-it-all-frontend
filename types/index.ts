export interface IRestaurants {
  data: IRestaurant[];
}

export interface IRestaurant {
  id: number;
  name: string;
  hashtags: string[];
  thumbnailImageUrl: string;
  address: string;
  curationId: number;
  kakaoMap: {
    id: number;
    mapLatitude: number;
    mapLongitude: number;
  };
}

export interface ICuration {
  id: number;
  title: string;
}
