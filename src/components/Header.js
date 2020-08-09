import React, { useState, useEffect } from "react";
import Modal from "./Login";

function logout() {
  localStorage.clear();
  window.location.reload(true);
}

function Header({ searchInput, setSearchInput }) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const main = window.localStorage.getItem("admin");
  const [admin, setAdmin] = useState(main);

  console.log(admin);

  useEffect(() => {
    setAdmin(main);
  });

  return (
    <>
      {showModal && <Modal setUser={setUser} setShowModal={setShowModal} />}
      <div className="header">
        <h1 className="cod">CoD Calculator</h1>

        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                className="search"
                value={searchInput}
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
                type="text"
                placeholder="Search CoD customers"
                required
              />
            </div>
            <div className="td" id="s-cover"></div>
          </div>
        </form>
        <br />
        {user ? (
          <div className="userNameLogout">
            <span className="userNameLog">
              Hello {user}!
              <button className="logout" onClick={logout}>
                <a href="/">Logout?</a>
              </button>
            </span>
          </div>
        ) : (
          <button className="account">
            <a href="/login">Log in!</a>
          </button>
        )}
        {user ? (
          <>
            <button className="thecartbtn">
              <a href="/company">CoD customers</a>
            </button>
            <button className="thecartbtn">
              <a href="/calculator">Calculator</a>
            </button>
            <button className="thecartbtn">
              <a href="/">Main</a>
            </button>
          </>
        ) : (
          <div className="makethataccount">
            Want CoD calculator/customer access?
            <br /> Sign in!
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
