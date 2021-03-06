const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

//Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.set('view engine', 'ejs');

//DB Connection
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true },
    () => console.log("connected to db!")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);


/*app.get("/", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});*/

//Server
app.listen(3000, () => console.log("Server is running in port 3000"));