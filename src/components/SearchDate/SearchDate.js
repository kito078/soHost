import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import Search from "../Search/Search";

function SearchDate() {
  //when we click it we want to have false
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="text-center">
      {showSearch && <Search />}
      <Button onClick={() => setShowSearch(!showSearch)}>Show Dates</Button>
    </div>
  );
}

export default SearchDate;
