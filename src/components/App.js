import React, { useState } from "react";
import Form from "./form";
import Company from "./company";
import Header from "./Header";
import Admin from "./admin";
import Login from "./Login";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const admin = localStorage.getItem("admin");
  if (!admin) {
    return (
      <Brouter>
        <div className="App">
          <Header searchInput={searchInput} setSearchInput={setSearchInput} />
          <Switch>
            <Login path="/login" exact component={Login} />
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
  } else {
    return (
      <Brouter>
        <div className="App">
          <Header searchInput={searchInput} setSearchInput={setSearchInput} />
          <Switch>
            <Admin path="/" exact component={Admin} />
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
  }
};

export default App;
