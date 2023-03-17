import React from "react";
import { MdSearch } from "react-icons/md";
const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.4em" />
      <input
        type="text"
        placeholder="search... "
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
