import React, { useState } from "react";
import { registerUser, userUpdate, adminUpdate } from "../api";
import Checkbox from "./checkbox";

const Admin = () => {
  const main = localStorage.getItem("admin");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  const [username, setUser2] = useState("");
  const [password2, setPassword2] = useState("");
  const [adminname, setUser3] = useState("");

  const handleRegis = (event) => {
    event.preventDefault();
    registerUser(user, password, email);
    cancelCourse();
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    userUpdate(username, password2);
    cancelCourse();
  };

  const handleAdmin = (event) => {
    event.preventDefault();
    adminUpdate(adminname, checkedOne);
    cancelCourse();
  };
  const cancelCourse = () => {
    setUser("");
    setUser2("");
    setUser3("");
    setPassword("");
    setEmail("");
    setCheckedOne(false);
    setPassword2("");
  };

  const changeUser2 = (event) => {
    setUser2(event.target.value);
  };

  const changeUser3 = (event) => {
    setUser3(event.target.value);
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
        <h2>Admin Page</h2>
        <form className="create">
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
        <form className="create">
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
        <form className="create">
          <div>Admin Settings</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={adminname}
            onChange={changeUser3}
          ></input>
          <Checkbox
            name="a"
            label="Set Admin"
            checked={checkedOne}
            onChange={updateOne}
          />
          <button className="submit" onClick={handleAdmin}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default Admin;
