const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/url");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/url")
        .then(() => { console.log("mongoDB connected") })
        .catch ((err) => {console.log(err)})

app.use(express.urlencoded({ extended: true }));


app.use("", router);
const PORT = 5000;
app.listen(PORT, () => {
    console.log("serving at port 5000")
})