const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});