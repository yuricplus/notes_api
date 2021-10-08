const express = require('express');
const db = require('./database/config');
const mongoose = require('mongoose');
const cors = require('cors')

class App {
  express: any;
  constructor(){
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(5000, () =>
      console.log(`Running in 5000 `)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors())
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;

export {}