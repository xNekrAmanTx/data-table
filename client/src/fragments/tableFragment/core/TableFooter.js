import { useState } from "react";
import styled from "styled-components";

const StyledTableFooter = styled.div`
  border-top: 1px solid black;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    cursor: pointer;
    user-select: none;
    margin: 0 5px;
    &:hover {
      transform: scale(1.75);
      transition: transform .25s;
    }
  }

  & p {
    letter-spacing: 0.3rem;
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
    color: #202125;
    cursor: pointer;
    width: 75%;
    outline: 3px solid;
    outline-color: rgba(71, 126, 232, 0.5);
    transition: all 1s cubic-bezier(0.2, 0, 0, 0.8);
    &:hover {
      color: rgba(71, 126, 232, 0.7);
      outline-color: rgba(71, 126, 232, 0);
      outline-offset: 70px;
    }
  }
`;

const StyledPagination = styled.div``;

const StyledPageElement = styled.span`
  cursor: pointer;
  border: 1px solid grey;
  padding: 5px;
  margin: 5px;

  ${({ isActive }) => isActive && `background-color: lightgreen`}

`;

export function TableFooter({ dataObj, currentPage, setCurrentPage }) {
  const paginationSize = 2;
  const totalPages = dataObj?.totalPages || 0;
  const pagesArray = new Array(totalPages).fill(null).map((_, i) => i);

  const [startNumber, setStartNumber] = useState(0);
  const visiblePagesArray = pagesArray.slice(startNumber, startNumber + paginationSize);

  function handlePrevClick() {
    setStartNumber(startNumber - 1);
  }
  function handleNextClick() {
    setStartNumber(startNumber + 1);
  }

  function handlePageClick(n) {
    setCurrentPage(n);
  }

  return (
    <StyledTableFooter>
      {totalPages && (
        <>
          {startNumber > 0 && <span onClick={handlePrevClick}>{"<"}</span>}

          <StyledPagination>
            {visiblePagesArray.map((n) => (
              <StyledPageElement
                key={n}
                isActive={currentPage === n}
                onClick={() => {
                  handlePageClick(n);
                }}
              >
                {n + 1}
              </StyledPageElement>
            ))}
          </StyledPagination>
          {startNumber + paginationSize < totalPages && (
            <span onClick={handleNextClick}>{">"}</span>
          )}
        </>
      )}
      {/* <p><i>LOAD MORE</i></p> */}
    </StyledTableFooter>
  );
}
