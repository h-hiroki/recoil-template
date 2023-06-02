import { atom } from "recoil";
import { searchImages } from "../pixabay/searchImages";

type Image = {
  id: number;
  tags: string;
  pageURL: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imagewWidth: number;
  imagewHeight: number;
};

type Pixabay = {
  keywords: string;
  total: number;
  totalHits: number;
  hits: Image[];
};

export const pixabayState = atom<Pixabay>({
  key: "pixabayState",
  default: searchImages().then((data) => {
    return {
      ...data,
      keywords: "",
    };
  }),
});
