import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { getFilteredData } from "../../api/getFilteredData";
import { baseUrl } from "../../constants";

const StyledFilterSection = styled.section`
  display: flex;
  margin: 25px 0;
  & > form {
    display: flex;
    & select {
      text-align: center;
    }
  }
  & label {
    margin-right: 10px;
  }
  & .search-submit {
    margin-left: 10px;
  }
`;

const StyledCategoryContainer = styled.div``;

const StyledConditionContainer = styled.div`
  margin: 0 25px;
`;

const StyledFilterFieldContainer = styled.div``;

export function FilterFragment({ setDataObj, setCurrentUrl, setCurrentPage }) {
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleCategoryChange = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const handleConditionChange = useCallback((e) => {
    setCondition(e.target.value);
  }, []);

  const handleSearchInputChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!category || !condition || !searchInput) return;
    const newCurrentUrl = `${baseUrl}&filter[field]=${category}&filter[condition]=${condition}&filter[value]=${searchInput}`;
    getFilteredData(newCurrentUrl).then((obj) => {
      setDataObj(obj);
      setCurrentUrl(newCurrentUrl);
      setCurrentPage(0);
    });
  }

  return (
    <StyledFilterSection>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* Category Select */}
        <StyledCategoryContainer>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            defaultValue={"default"}
            onChange={handleCategoryChange}
          >
            <option value={"default"} disabled>
              Choose an option
            </option>
            <option value="title">Title</option>
            <option value="quantity">Quantity</option>
            <option value="distance">Distance</option>
          </select>
        </StyledCategoryContainer>

        {/* Condition Select */}
        <StyledConditionContainer>
          <label htmlFor="condition">Condition:</label>
          <select
            disabled={!category}
            id="condition"
            name="condition"
            defaultValue={"default"}
            onChange={handleConditionChange}
          >
            <option value={"default"} disabled>
              Choose an option
            </option>
            <option value="=">{"equal ="}</option>
            {category === "title" ? (
              <option value="contains">{"contains ⊂"}</option>
            ) : (
              <>
                <option value=">">{"greater then >"}</option>
                <option value="<">{"less then <"}</option>
              </>
            )}
          </select>
        </StyledConditionContainer>

        {/* Search Text Input */}
        <StyledFilterFieldContainer>
          <label htmlFor="filterField"></label>
          <input
            disabled={!condition}
            type={category === "title" ? "text" : "number"}
            id="filterField"
            name="filterField"
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="search-submit" disabled={!searchInput}>
            Search
          </button>
        </StyledFilterFieldContainer>
      </form>
    </StyledFilterSection>
  );
}
