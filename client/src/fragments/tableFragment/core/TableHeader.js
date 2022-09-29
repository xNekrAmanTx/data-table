import styled from "styled-components";
import { TableCell } from "../../../components/TableCell";
import { orderKinds, tableCaptions } from "../../../constants";

const StyledTableHeader = styled.div`
  display: flex;
`;

export function TableHeader({ sortedColumn, setSortedColumn }) {
  function handleSortByURL(queryParam) {
    if (queryParam === tableCaptions[0].ref) return;
    const order =
      sortedColumn.name === queryParam && sortedColumn.order === orderKinds.ASCENDING
        ? orderKinds.DESCENDING
        : orderKinds.ASCENDING;
    setSortedColumn({
      name: queryParam,
      order,
    });
  }

  return (
    <StyledTableHeader>
      {tableCaptions.map((caption, i) => (
        <TableCell
          key={caption.ref}
          content={caption.name}
          colRef={caption.ref}
          isSortable={!!i}
          isHeaderCell={true}
          sortedColumn={sortedColumn}
          onClick={() => {
            handleSortByURL(caption.ref);
          }}
        />
      ))}
    </StyledTableHeader>
  );
}
