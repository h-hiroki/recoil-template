import { useRecoilValue } from "recoil";
import { pixabayState } from "../recoil/pixabayState";

type Props = {};

export const SearchedImages = (props: Props) => {
  const pixabay = useRecoilValue(pixabayState);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        gap: "32px",
      }}
    >
      {pixabay.hits.map((hit) => (
        <div key={hit.id}>
          <img
            src={hit.previewURL}
            width={hit.previewWidth}
            height={hit.previewHeight}
            style={{
              objectFit: "contain",
              boxShadow: "2px 2px 8px #000",
            }}
          />
        </div>
      ))}
    </div>
  );
};
