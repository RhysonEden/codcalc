import React, { useState, useEffect } from "react";
import { getCompanies } from "../api/company";

const Company = ({ searchInput }) => {
  const [companies, setCompany] = useState([]);
  const [message, setMessage] = useState("");
  const user = localStorage.getItem("user");

  useEffect(() => {
    getCompanies()
      .then((response) => {
        setCompany(response.data.company);
        console.log(response.data.company);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else {
    return (
      <div className="company">
        {companies
          .filter((company) => {
            const trimmedSearchInput = searchInput.toLowerCase();
            if (
              trimmedSearchInput === "" ||
              company.cusname.toLowerCase().includes(trimmedSearchInput) ||
              company.address.toLowerCase().includes(trimmedSearchInput) ||
              company.phone.toLowerCase().includes(trimmedSearchInput)
            )
              return true;
          })
          .map((company, index) => (
            <div className="allco">
              <div id={index}>Name:{company.cusname}</div>
              <br />
              <div>Address:{company.address}</div>
              <br />
              <div>Phone:{company.phone}</div> <br />
            </div>
          ))}
      </div>
    );
  }
};

export default Company;
