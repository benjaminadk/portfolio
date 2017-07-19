var express = require("express")
const path = require('path')
var app = express()

app.use(express.static(path.join(__dirname,'my-app', 'build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'my-app', 'build', 'index.html'));
})

app.listen(process.env.PORT||9000)