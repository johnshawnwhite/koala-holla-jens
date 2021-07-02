const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koalaRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.use('/koalas', koalaRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
