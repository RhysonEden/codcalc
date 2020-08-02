import React, { useState, useEffect } from "react";
import Form from "./form";

function handleRefresh() {
  // setLinks, setMessage, setTags
  // return function () {
  //   getSomething()
  //     .then((response) => {
  //       setLinks(response.allLinks);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  //   getSomethingElse()
  //     .then((response) => {
  //       setTags(response.allTags);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // };
}

const App = () => {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   CreateStuff()
  //     .then((response) => {
  //       setMessage(response.message);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <div className="header">
        <h1>CoD Calculator</h1>
      </div>
      <Form />
      <h2>{message}</h2>
    </div>
  );
};

export default App;
