require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connnection = require("./src/Config/database");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 8001;
const hostname = process.env.HOSTNAME || 8000;

const userRoute = require("./src/routes/userRoute");
const priceRoute = require("./src/routes/priceRoute");
const shopRoute = require("./src/routes/shopRoute");

// app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use(express.json());
app.use("/api", userRoute);
app.use("/api", priceRoute);
app.use("/api", shopRoute);

connnection();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
