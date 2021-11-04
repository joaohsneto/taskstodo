const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = process.env.DB_NAME;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

