import React, { useState, userForm } from "react";
import moment from "moment";

export default function Form() {
  const [labor, setLabor] = useState("");
  const [mileage, setMileage] = useState("");
  const [partprice, setPartPrice] = useState("");
  const [finalRate, setFinalRate] = useState("");

  const cancelCourse = () => {
    console.log("canceCourse Link 10 form.JS");
    setLabor("");
    setMileage("");
    setPartPrice("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hourlyRate = labor * 80 + (mileage * 0.085 + 7.5) + Number(partprice);
    let roundedRate = Math.round(hourlyRate * 100) / 100;
    setFinalRate(roundedRate);
    cancelCourse();
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
    <div className="page">
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
      <div className="finalrate">
        <h1>{finalRate}</h1>
      </div>
    </div>
  );
}
