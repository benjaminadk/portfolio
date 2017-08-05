var express = require("express")
var app = express()
var router = express.Router()
var path = require("path")
var bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({extended: false})
var mongoose = require("mongoose")

const URI = 'mongodb://ben:ben@dbh30.mlab.com:27307/portfolio'
const options = { useMongoClient: true}
mongoose.connect(URI, options)
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema

var formSchema = new Schema({
   email: String,
   message: String
})

var Form = mongoose.model('Form', formSchema)



app.use(express.static(path.join(__dirname, 'my-app/build')))


//app.use(formidable());
app.use(urlencodedParser);
app.post('/contact', function(req,res,next){
    var item = Object.keys(req.body)
    var o = JSON.parse(item[0])
    var e = o.email
    var m = o.message
    console.log(e)
   //var item = JSON.stringify(req.fields)
   var form = new Form({email: e,message: m
}).save(function(err,data){
       if(err) throw err
       if(data) res.json(data)
   })
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'/my-app/build/index.html'))
})

app.listen(process.env.PORT||9000,function(){
    console.log("server is up yo")
})