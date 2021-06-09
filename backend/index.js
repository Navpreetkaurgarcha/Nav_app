//react dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//exported file
const db = require("./queries");

const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/users", db.getSN);

//route to look for s GET request
app.get("/", (request, response) => {
  response.json({ info: "Its working...!!!!!!" });
});

//listening to the app
app.listen(5000, () => {
  console.log(`Server is running `);
  console.log(`Listening to port ${port}`);
});
