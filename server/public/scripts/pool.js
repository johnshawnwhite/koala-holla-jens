const pg =require('pg');
const Pool =pg.Pool;
const pool = new Pool ({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});