import React, { useState, useEffect } from "react";
import { getCompanies } from "../api/company";

const Company = ({ searchInput }) => {
  const [companies, setCompany] = useState([]);
  const user = localStorage.getItem("user");

  useEffect(() => {
    getCompanies()
      .then((response) => {
        setCompany(response.data.company);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else {
    return (
      <div className="page">
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
              <div id={index} className="name">
                Name:{company.cusname}
              </div>
              <br />
              <div className="address">Address:{company.address}</div>
              <br />
              <div className="phone">Phone:{company.phone}</div> <br />
            </div>
          ))}
      </div>
    );
  }
};

export default Company;
