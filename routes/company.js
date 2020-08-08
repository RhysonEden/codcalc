const apiRouter = require("express");
const companyRouter = apiRouter.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getAllCompanies } = require("../db");
const { JWT_SECRET } = process.env;

companyRouter.get("/", async (req, res, next) => {
  try {
    const company = await getAllCompanies();
    res.send({ company });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = companyRouter;
