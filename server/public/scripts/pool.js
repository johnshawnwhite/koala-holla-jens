const pg = require("pg");
//Setup PG for database connection
const Pool = pg.Pool;
const pool = new Pool({
    database: "koalas",  // Database name
    host: "localhost",  //Database location
    port: 5432, // Database port (5432 by default)
    max: 10, //Connections (queries) at one time
    idleTimeOutMillis: 30000 // Time to connect, cancel otherwise.
})
pool.on("connect", () => {
    console.log("Postgresql connected");
});
pool.on("error", error => {
    console.log("Error with postgresql tool", error);
});
module.exports = pool;