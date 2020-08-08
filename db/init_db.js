const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  client,
  getAllUsers,
  createUser,
  getUsersByID,
  getAllCompanies,
  getCompaniesById,
  getUserByUsername,
} = require("./index");

// CREATE TABLE company (
//   id SERIAL PRIMARY KEY,
//   cusnumber varchar UNIQUE NOT NULL,
//   cusname varchar UNIQUE NOT NULL,
//   hold varchar UNIQUE NOT NULL,
//   payterms varchar UNIQUE NOT NULL,
//   phone varchar UNIQUE NOT NULL,
//   address varchar UNIQUE NOT NULL,
//   city varchar UNIQUE NOT NULL
// )

async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          email varchar NOT NULL,
          admin varchar NOT NULL
        );

      `);
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      console.log("here the user");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "David",
          password: hashedPassword,
          email: "test1@yahoo.com",
          admin: true,
        });
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "James",
          password: hashedPassword,
          email: "test2@yahoo.com",
          admin: true,
        });
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "Kevin",
          password: hashedPassword,
          email: "test3@yahoo.com",
          admin: true,
        });
        console.log(robin);
        resolve();
      });
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    const comp100 = await getCompaniesById(100);
    const comp200 = await getCompaniesById(200);
    const userArman = await getUserByUsername("arman");
    const userJames = await getUserByUsername("james");
    const userRobin = await getUserByUsername("robin");
    const users = await getAllUsers();
    console.log("username", userArman, userJames, userRobin);
    console.log("all users", users);
    console.log("#200=", comp200);
    console.log("#100=", comp100);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
