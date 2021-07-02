<<<<<<< HEAD
const pg =require('pg');
const Pool =pg.Pool;
const pool = new Pool ({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});
=======
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
>>>>>>> 05bcc5c026a84e7cc704e609d4d7be808a9c3d4f
