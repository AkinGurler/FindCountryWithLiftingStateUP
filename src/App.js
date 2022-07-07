import React, { useState } from "react";
import "./styles.css";
import SearchForm from "./SearchForm";
import CountryList from "./CountryList";

const App = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);
  return (
    <div className="App">
      <h1>Find Country</h1>
      <SearchForm search={search} handleChange={handleChange} />
      <CountryList search={search} />
    </div>
  );
};

export default App;
