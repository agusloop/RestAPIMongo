var mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db_uri = process.env.DB_URI;

mongoose
  .connect(db_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB conectada"))
  .catch((err) => console.log("DB error", err));
