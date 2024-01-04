const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const cookieParser = require("cookie-parser")
const router = require("./routes/url");
const staticRouter = require("./routes/staticRouter")
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/url")
    .then(() => { console.log("mongoDB connected") })
    .catch((err) => { console.log(err) })

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const { checkForAuthentication, restrictTo } = require("./authmiddleware/auth")
app.use("/url", [checkForAuthentication, restrictTo(["normal", "admin"])], staticRouter);
app.use("/url", [checkForAuthentication, restrictTo(["normal", "admin"])], router);
app.use("/details", [checkForAuthentication, restrictTo(["admin"])], staticRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("serving at port 3000")
})