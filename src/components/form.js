import React, { useState, userForm } from "react";
import moment from "moment";
import createStuff from "./calculator";

export default function Form() {
  const [labor, setLabor] = useState("");
  const [mileage, setMileage] = useState("");
  const [partprice, setPartPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createStuff(labor, mileage, partprice);
  };

  const changeLabor = (event) => {
    setLabor(event.target.value);
  };

  const changeMileage = (event) => {
    setMileage(event.target.value);
  };

  const changePartPrice = (event) => {
    setPartPrice(event.target.value);
  };

  return (
    <form id="create">
      <input
        className="form-input"
        id="date"
        placeholder={moment().format("dddd")}
      ></input>
      <input
        className="form-input"
        id="link"
        value={labor}
        placeholder="Enter Labor/Travel Time"
        onChange={changeLabor}
      ></input>
      <input
        className="form-input"
        id="comment"
        value={mileage}
        placeholder="Enter Miles Traveled"
        onChange={changeMileage}
      ></input>
      <input
        className="form-input"
        id="tags"
        value={partprice}
        placeholder="Enter Parts Price"
        onChange={changePartPrice}
      ></input>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
