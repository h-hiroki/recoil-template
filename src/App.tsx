import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { pageState } from "./recoil/pageState";

function App() {
  const [page, setPage] = useRecoilState(pageState);
  const jumpPage = useCallback(
    (page: 1 | 2) => () => {
      setPage(page);
    },
    [page, setPage]
  );

  return (
    <div className="container">
      <header>
        Recoil Template
        <div className="grid">
          <button onClick={jumpPage(1)}>Page1</button>
          <button onClick={jumpPage(2)}>Page2</button>
        </div>
      </header>
      {[<Page1 />, <Page2 />][page - 1]}
    </div>
  );
}

export default App;
