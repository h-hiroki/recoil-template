import { atom } from "recoil";

export const pageState = atom<1 | 2>({
  key: "pageState",
  default: 1,
});
