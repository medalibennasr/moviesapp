import React from "react";
import "./search.css";

const Search = ({ setFilterByName }) => {
  return (
    <div class="box">
      <form name="search">
        <input
          type="text"
          class="input"
          name="txt"
          onmouseout="document.search.txt.value = ''"
          onChange={(e) => setFilterByName(e.target.value) }
        />
      </form>
      <i class="fas fa-search"></i>
    </div>
  );
};

export default Search;
