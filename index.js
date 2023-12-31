const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const router = require("./routes/url");
const staticRouter = require("./routes/staticRouter")
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/url")
    .then(() => { console.log("mongoDB connected") })
    .catch((err) => { console.log(err) })

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));


app.use("/url", router);
app.use("/", staticRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("serving at port 3000")
})