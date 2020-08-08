import React, { useState, userForm } from "react";
import moment from "moment";
import NumericInput from "react-numeric-input";

const Form = () => {
  const [labor, setLabor] = useState("");
  const [mileage, setMileage] = useState("");
  const [partprice, setPartPrice] = useState("");
  const [finalRate, setFinalRate] = useState("");
  const [extraCostOne, setExtraCostOne] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const user = localStorage.getItem("user");

  const cancelCourse = () => {
    console.log("canceCourse Link 10 form.JS");
    setLabor("");
    setMileage("");
    setPartPrice("");
    setExtraCostOne(0);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let partTax = Number(partprice) * 0.07;
    let partTotal = partTax + Number(partprice);
    let rags = numberOne * 20;
    let gloves = numberTwo * 10;
    let P1 = Number(extraCostOne);
    let hourlyRate =
      labor * 80 + (mileage * 0.085 + 7.5) + partTotal + P1 + rags + gloves;
    let preRoundRate = Math.round(hourlyRate * 100) / 100;
    let roundedRate = preRoundRate.toFixed(2);
    setFinalRate(roundedRate);
    cancelCourse();
  };

  const addNumberOne = () => {
    setNumberOne(numberOne + 1);
  };
  const minusNumberOne = () => {
    if (numberOne >= 1) {
      setNumberOne(numberOne - 1);
    } else {
      setNumberOne(numberOne);
    }
  };

  const addNumberTwo = () => {
    setNumberTwo(numberTwo + 1);
  };
  const minusNumberTwo = () => {
    if (numberTwo >= 1) {
      setNumberTwo(numberTwo - 1);
    } else {
      setNumberTwo(numberTwo);
    }
  };

  const handleCheckBoxOne = (checked) => {
    if (checked) {
      setExtraCostOne(50);
    } else {
      setExtraCostOne(0);
    }
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
  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else {
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
          <div className="check">
            <span>P1</span>
            <input type="checkbox" onChange={handleCheckBoxOne}></input>
          </div>
          <div className="check">
            <span>Gloves</span>
            <a href="#!" className="qty-minus" onClick={minusNumberTwo}>
              -
            </a>
            <input className="miscitems" type="numeric" value={numberTwo} />
            <a href="#!" className="qty-plus" onClick={addNumberTwo}>
              +
            </a>
          </div>
          <div className="check">
            <span>Rags</span>
            <a href="#!" className="qty-minus" onClick={minusNumberOne}>
              -
            </a>
            <input className="miscitems" type="numeric" value={numberOne} />
            <a href="#!" className="qty-plus" onClick={addNumberOne}>
              +
            </a>
          </div>
          <br />
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className="finalrate">
          <h1>Trip Total = ${finalRate}</h1>
        </div>
      </div>
    );
  }
};

export default Form;
