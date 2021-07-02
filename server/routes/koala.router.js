const express = require('express');
const router = express.router();

const pool = require('./modules/pool');

// DB CONNECTION
// GET

router.get('/', (req, res) => {
    console.log('Inside router.get', req);
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
    console.log('Inside router.post', req);
    const koalaData = req.body;
    const queryText = `INSERT INTO koalas ( name, gender, age, readyToTransfer, notes)
                      VALUE ($1, $2, $3, $4, $5);`;                     
    pool.query(queryText, [koalaData.name, koalaData.gender, koalaData.age, koalaData.readyToTransfer, koalaData.notes] )
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
    console.log('inside router.put', req.params.id);
    const koalaData = req.body;
    const koalaID = req.params.id;
// we need to create a sql statement where we UPDATE INTO koalas
    const queryText = `UPDATE koalas SET “readyToTransfer” = $1, WHERE id = $2;`; 
    pool.query(queryText, [koalaData.readyToTransfer, koalaID.id])
  
    })
    .then((response) => {
        console.log('Updated ready to transfer', response.rows);
        res.sendStatus(201);
    }
    ).catch((error) => {
        console.log('error updating ready to transfer', error);
        res.sendStatus(500);
    });

// DELETE

router.delete('/:id', (req, res) => {
    console.log('inside router.delete', req.url);
    console.log('request router parameters', req.params);
    const koalaID= req.params.id;
    
    const queryText = `DELETE FROM koalas WHERE id = $1;`;
    pool.query(queryText, [koalaID.id])

    })
    .then((response) => {
        console.log(`Deleted koala from dataset, ${response.rowCount ===1}`);
        res.sendStatus(202);
    })
    .catch((error) => {
        console.log(`Could not delete koala with id ${koalaID}`, error);
        res.sendStatus(500);
    })

module.exports = koalaRouter;