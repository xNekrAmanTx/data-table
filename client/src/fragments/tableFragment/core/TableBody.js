import styled from "styled-components";
import { TableCell } from "../../../components/TableCell";
import { formatDate } from "../../../helpers/formatDate";

const StyledTableBody = styled.div``;

const StyledTableBodyRow = styled.div`
  display: flex;
`;

export function TableBody({rows}) {
  return (
    <StyledTableBody>
      {rows?.map((row) => (
        <StyledTableBodyRow key={row.id}>
          <TableCell content={formatDate(new Date(row.date))}></TableCell>
          <TableCell content={row.title}></TableCell>
          <TableCell content={row.quantity}></TableCell>
          <TableCell content={row.distance}></TableCell>
        </StyledTableBodyRow>
      ))}
    </StyledTableBody>
  );
}
