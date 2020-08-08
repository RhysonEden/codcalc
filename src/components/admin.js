import React, { useState, useEffect } from "react";
import { registerUser, userUpdate } from "../api";

const Admin = () => {
  const main = localStorage.getItem("admin");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [username, setUser2] = useState("");
  const [password2, setPassword2] = useState("");
  const [email2, setEmail2] = useState("");

  const handleRegis = (event) => {
    event.preventDefault();
    registerUser(user, password, email);
    cancelCourse();
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(user, password);
    userUpdate(username, password);
    cancelCourse();
  };
  const cancelCourse = () => {
    setUser("");
    setPassword("");
    setEmail("");
  };

  const changeUser2 = (event) => {
    setUser2(event.target.value);
  };

  const changePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const changeUser = (event) => {
    setUser(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  if (main.includes(false)) {
    return <div className="Welcome">Welcome!</div>;
  } else {
    return (
      <div className="page">
        <form id="create">
          <h2>Admin Page</h2>
          <div>Create User</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={user}
            onChange={changeUser}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Password"
            value={password}
            onChange={changePassword}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Email"
            value={email}
            onChange={changeEmail}
          ></input>
          <button className="submit" onClick={handleRegis}>
            Submit
          </button>
        </form>
        <form id="create">
          <div>Change Password</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={username}
            onChange={changeUser2}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter New Password"
            value={password2}
            onChange={changePassword2}
          ></input>
          <button className="submit" onClick={handleUpdate}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default Admin;
