require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connnection = require("./src/Config/database");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 8001;
const hostname = process.env.HOSTNAME || 8000;

const userRoute = require("./src/routes/userRoute");

app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(express.json());
app.use("/api", userRoute);

connnection();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
