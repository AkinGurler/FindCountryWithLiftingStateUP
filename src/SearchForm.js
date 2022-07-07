import React, { useState } from "react";

const SearchForm = (props) => {
  return (
    <form>
      <input
        name="search"
        placeholder="search countries"
        value={props.search}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchForm;
