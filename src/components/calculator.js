import React, { useState } from "react";
import moment from "moment";

const CreateStuff = (labor, mileage, partprice) => {
  // const [finalRate, setFinalRate] = useState(0);
  console.log("calculator values", labor, mileage, partprice);
  let hourlyRate = labor * 80 + (mileage * 0.085 + 7.5) + partprice;
  let roundedRate = Math.round(hourlyRate * 100) / 100;
  console.log(hourlyRate);
  console.log(roundedRate);
  // setFinalRate(roundedRate);
  // return (
  //   <div clasName="finalrate">
  //     <h1>{finalRate}</h1>
  //   </div>
  // );
};

export default CreateStuff;
