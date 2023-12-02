require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connnection = require("./src/Config/database");
const app = express();
const port = process.env.PORT || 8001;
const hostname = process.env.HOSTNAME || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api");

connnection();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
