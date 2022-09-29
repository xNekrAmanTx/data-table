import styled from "styled-components";
import { orderKinds } from "../constants";

const StyledTableCell = styled.div`
  padding: 15px;
  width: 200px;
  border: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isHeaderCell }) => isHeaderCell && "font-weight: bold"};

  ${({ isSortable }) => isSortable && "cursor: pointer"};

  & .space-between {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledOrderSign = styled.span`
  user-select: none;
`

export function TableCell({ content, sortedColumn, isHeaderCell, isSortable, colRef, ...rest }) {
  let orderSign = "";
  if (isHeaderCell && isSortable) {
    switch (sortedColumn.order) {
      case orderKinds.ASCENDING:
        orderSign = "▲";
        break;
      case orderKinds.DESCENDING:
        orderSign = "▼";
        break;
      default:
    }
  }

  return (
    <StyledTableCell isHeaderCell={isHeaderCell} isSortable={isSortable} {...rest}>
      <div className="space-between">
        <span>{content}</span>
        {sortedColumn?.name === colRef && !!orderSign && <StyledOrderSign>{orderSign}</StyledOrderSign>}
      </div>
    </StyledTableCell>
  );
}
