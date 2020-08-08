import React, { useState, useEffect } from "react";
import Form from "./form";
import Company from "./company";
import Header from "./Header";
import { BrowserRouter as Brouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Brouter>
      <div className="App">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Switch>
          <Form
            path="/calculator"
            exact
            component={Form}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <Company
            path="/company"
            exact
            component={Company}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Switch>{" "}
      </div>
    </Brouter>
  );
};

export default App;
