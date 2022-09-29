import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBaseData } from "./api/getBaseData";
import { baseUrl } from "./constants";
import { FilterFragment } from "./fragments/filterFragment/FilterFragment";
import { TableFragment } from "./fragments/tableFragment/tableFrament";

const StyledApp = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  & main {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h1 {
      font-size: 3rem;
    }
  }
`;

function App() {
  const [dataObj, setDataObj] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(baseUrl);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getBaseData()
      .then((obj) => setDataObj(obj));
  }, []);
  return (
    <StyledApp>
      <main>
        <h1>Data Table</h1>
        <FilterFragment
          setDataObj={setDataObj}
          setCurrentUrl={setCurrentUrl}
          setCurrentPage={setCurrentPage}
        />
        <TableFragment
          dataObj={dataObj}
          setDataObj={setDataObj}
          currentUrl={currentUrl}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </StyledApp>
  );
}

export default App;
