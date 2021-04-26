const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", (req,res) => {
   res.sendFile(__dirname + '/index.html');
})

app.post("/", (req,res) => {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("Summation of " + n1 + " and " + n2 + " is : " + result);
})

app.listen(port, () => {
    console.log("server listenning on port 3000!");
})