const express = require('express');
const bodyParser = require('body-parser');
const statusCode = require('http-status-codes');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser(app));

app.get('/', (req, res) => {
  res.status(statusCode.OK).send('Hello World!');
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
