export interface IRestaurant {
  id: number;
  name: string;
  hashtags: string[];
  thumbnailImageUrl: string;
  address: string;
  kakaoMap: {
    id: number;
    latitude: number;
    longitude: number;
  };
  curationIds: string[];
}

export interface ICuration {
  id: number;
  title: string;
}
