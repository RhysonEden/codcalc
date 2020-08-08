const { Client } = require("pg");
const DB_NAME = "localhost:5432/cod";
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);
const bcrypt = require("bcrypt");

async function createUser({ username, password, email, admin }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email, admin)
      VALUES ($1, $2, $3, $4);
    `,
      [username, password, email, admin]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    console.log("firing");
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  console.log("running");
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT *
    FROM users;
  `
  );

  return rows;
}

async function getAllCompanies() {
  const { rows } = await client.query(
    `SELECT *
    FROM company;
  `
  );

  return rows;
}

async function getCompaniesById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM company
    WHERE id=$1;
    `,
      [id]
    );
    console.log("user", user);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    console.log("user", user);
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createUser,
  getUserByUsername,
  getUser,
  getAllUsers,
  getUsersByID,
  getAllCompanies,
  getCompaniesById,
};
