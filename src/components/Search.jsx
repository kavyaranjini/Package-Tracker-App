import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";

const Search = (props) => {
  const [searchQuerry, setSearchQuerry] = useState();

  return (
    <div className="searchbar">
      <SearchBar
        value={searchQuerry}
        placeholder="Jhon Doe"
        autoFocus
        onChange={(newVal) => props.getSearch(newVal)}
      />
    </div>
  );
};

export default Search;
