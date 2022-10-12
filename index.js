const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mailer = require("./mailer");

// api config
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares

app.use(express.json());
app.use(cors());

// db config

// api routes
app.get("/", (req, res) => res.status(200).send("Welcome to Aigron api"));

app.post("/api/contact", (req, res) => {
  console.log(req.body);
  if (req.body) {
    mailer("Contact Form", req.body);
  }
});

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
