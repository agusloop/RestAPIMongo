const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./db");

const clientRoutes = require("./routes/clients.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", clientRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
