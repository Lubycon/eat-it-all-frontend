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
  description: string;
  curationIds: string[];
}

export interface ICuration {
  content: string;
  id: number;
  title: string;
  imageUrl: string;
  restaurants: IRestaurant[];
}
