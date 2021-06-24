import { atom } from "recoil";

export const modalRestaurantIdState = atom<number | null>({
  key: "modalRestaurantIdState",
  default: null,
});
