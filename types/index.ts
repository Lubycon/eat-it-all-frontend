import { EmojiType } from '../components/common/Emoji';

export interface Menu {
  id: number;
  name: string;
  price: number;
  restaurantId: number;
  description: string | null;
}

type IngredientName = keyof typeof EmojiType;

export interface Ingredient {
  id: number;
  contents: string;
  name: IngredientName;
}

export interface Restaurant {
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
  menus: Menu[];
  material: Ingredient;
}

export interface Curation {
  contents: string;
  id: number;
  title: string;
  imageUrl: string;
  restaurants: Restaurant[];
}
