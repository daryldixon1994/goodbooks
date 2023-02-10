const express = require("express");
const mongoose = require("mongoose");
const connect = require("./utils/connect");
const path = require("path");
const app = express();
//COONECT TO DATABASE
connect();

//express json middleware
app.use(express.json());
//multer middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/admin", require("./routes/admin"));
app.use("/api/user", require("./routes/user"));
app.use("/api/author", require("./routes/author"));
app.use("/api/public", require("./routes/public"));

//server is listenning
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running...");
});
