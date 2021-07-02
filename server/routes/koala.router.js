const express = require('express');
const router = express.router();

const pool = require('./modules/pool');



// DB CONNECTION
// GET

router.get('/', (req, res) => {
    console.log('Inside app.get', req);
    let queryText = 'SELECT * FROM koalas;';
    pool.query(queryText)
      .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
      console.log(`error making query ${queryText}`, error);
    });
  })
  

// POST

router.post('/', (req, res) => {
    console.log('Inside app.post', req);
    const koalaData = req.body;
    const queryText = `INSERT INTO koalas ( name, gender, age, readyToTransfer, note)
                      VALUE ($1, $2, $3, $4, $5);`;                     
    pool.query(queryText, [koalaData.name, koalaData.gender, koalaData.age, koalaData.readyToTransfer, koalaData.readyToTransfer, koalaData.note] )
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`error making query ${queryText}`, error);
      res.sendStatus(500);
    })
  
  })

// PUT

router.put('/:id', (req, res) => {
    console.log('inside app.put', req.params.id);
    const koalaID = req.params.id;
// we need to create a sql statement where we UPDATE INTO koalas
  
  })

// DELETE

router.delete('/:id', (req, res) => {
    console.log('inside delete', req.url);
  })

module.exports = koalaRouter;