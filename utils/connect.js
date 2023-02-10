const mongoose = require("mongoose");
require("dotenv").config();
const DBUSER = process.env.DBUSER;
const DBPWD = process.env.DBPWD;
const connect = () => {
    mongoose
        .connect(
            `mongodb+srv://${DBUSER}:${DBPWD}@cluster0.xu8jhiq.mongodb.net/MYLIBRARY?retryWrites=true&w=majority`
        )
        .then(() => console.log("connected to database"))
        .catch((err) => console.log(err));
};
module.exports = connect;
