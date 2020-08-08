import React, { useState, useEffect } from "react";
import { registerUser } from "../api";

const Admin = () => {
  const main = localStorage.getItem("admin");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // registerUser(user, password, email);
    console.log(user, password, email);
    cancelCourse();
  };

  const cancelCourse = () => {
    console.log("canceCourse Link 10 form.JS");
    setUser("");
    setPassword("");
    setEmail("");
  };

  if (!main) {
    return <div className="pleaselogin">You do not have access</div>;
  } else {
    return (
      <div className="page">
        <form id="create">
          <div>Create User</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            onChange={setUser}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Password"
            onChange={setPassword}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Email"
            onChange={setEmail}
          ></input>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default Admin;
