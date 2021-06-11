import React from "react";
import { useGlobalContext } from "../context";
function Search() {
  const { filterKeyword, RemoveKeyword, ClearKeywords } = useGlobalContext();

  return (
    <div className={`${filterKeyword.length > 0 ? "search" : null}`}>
      <div className="filter-tags">
        {filterKeyword.map((item, index) => {
          return (
            <div className="filter" key={index}>
              <span>{item}</span>
              <button onClick={() => RemoveKeyword(item)}>X</button>
            </div>
          );
        })}
      </div>
      {filterKeyword.length > 0 && (
        <button className="clear" onClick={ClearKeywords}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
