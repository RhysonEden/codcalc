import React, { useState } from "react";
import { loginUser, registerUser } from "../api/index";
import moment from "moment";

function Modal() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  const changeUser = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const cancelCourse = () => {
    setUsername("");
    setPassword("");
    window.location.reload(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(username, password).then(() => {
      setUser(username);
      cancelCourse();
    });
  };

  return (
    <div className="page">
      <form id="create">
        <input
          className="form-input"
          id="link"
          value={user}
          placeholder="Enter Username"
          onChange={changeUser}
        ></input>
        <input
          className="form-input"
          id="comment"
          value={password}
          placeholder="Enter Password"
          onChange={changePassword}
        ></input>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Modal;
