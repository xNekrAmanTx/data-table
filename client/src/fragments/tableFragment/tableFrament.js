import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDataByUrl } from "../../api/getDataByUrl";
import { orderKinds, tableCaptions } from "../../constants";
import { TableBody } from "./core/TableBody";
import { TableFooter } from "./core/TableFooter";
import { TableHeader } from "./core/TableHeader";

const StyledTable = styled.section`
  & > .container {
    border: 1px solid black;
  }
`;

const StyledInfoMessage = styled.h2`
  color: red;
`;

export function TableFragment({
  dataObj,
  setDataObj,
  currentUrl,
  currentPage,
  setCurrentPage,
}) {
  const [sortedColumn, setSortedColumn] = useState({
    name: tableCaptions[1].ref,
    order: orderKinds.NONE,
  });

  useEffect(() => {
    getDataByUrl(currentUrl + "&page=" + currentPage, {
      queryParam: sortedColumn.name,
      order: sortedColumn.order,
    }).then((obj) => setDataObj(obj));
  }, [currentPage, sortedColumn]);

  return dataObj?.totalItems ? (
    <StyledTable>
      <div className="container">
        <TableHeader sortedColumn={sortedColumn} setSortedColumn={setSortedColumn} />
        <TableBody rows={dataObj.data} />
      </div>
      <TableFooter dataObj={dataObj} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </StyledTable>
  ) : (
    <StyledInfoMessage> No any data with such parameters </StyledInfoMessage>
  );
}
