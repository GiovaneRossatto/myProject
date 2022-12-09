const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const bodyParser = require("body-parser");
const { text } = require("body-parser");
var userList = []

app.set('views', './views');
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.get('/users-form', (req, res) => {
    res.render('index')
})

app.post('/submit', (req, res) => {
    userList.push(req.body)
    console.log(userList);
})

app.get("/user-list", (req, res) => {
    res.send(userList)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
