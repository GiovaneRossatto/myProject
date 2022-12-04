const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const { text } = require("body-parser");

app.set('views', './views');
app.set("view engine", "pug");

app. get ("/users-form", (reg, res) => {
    fs.readFile(__dirname + "/form.html", "utf8", (err, text) =>
    {
    res.send(text);
    });
    });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
