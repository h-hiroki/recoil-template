import { Suspense } from "react";
import { SearchedImages } from "./SearchedImages";

type Props = {};

export const Page1 = (props: Props) => {
  return (
    <article>
      <header>Page1</header>
      <Suspense fallback={<article aria-busy="true"></article>}>
        <SearchedImages />
      </Suspense>
    </article>
  );
};
