const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koala.router')
const pg = require('pg');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/koalas', koalaRouter);
//-----------required server side code above----------------//

app.get('/koalas', (req, res) => {
  console.log('Inside app.get', req);
})
app.post('/koalas', (req, res) => {
  console.log('Inside app.post', req);
})
app.put('/:id', (req, res) => {
  console.log('inside app.put', req.params.id);
})
app.delete('/:id', (req, res) => {
  console.log('inside delete', req.url);
})

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
