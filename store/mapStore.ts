import { atom } from "recoil";

export const openModalState = atom<boolean>({
  key: "openModalState",
  default: false,
});
