const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const userInformation = [];

app.route("/api/signup")
  .get((req, res) => {
    res.json(userInformation);
  })
  .post((req, res) => {
    userInformation.push(req.body);
    res.redirect("/api/signup")
  })

app.listen(3000,
  () => console.log("app is running on port 3000")
);