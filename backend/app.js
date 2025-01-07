const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");

const app = express();
connectToDb();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;
