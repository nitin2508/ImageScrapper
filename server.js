var express = require('express');
var scrapeRouter = require('./Routes/scrapeRouter');
var keywordRouter = require('./Routes/keywordRouter');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config/db');

var app = express();
app.use(express.static(__dirname + '/images'));
// express.static(__dirname + "/images");
app.use("/public", express.static(__dirname + "/images"));
app.use("/public2", express.static(__dirname + "/public2"));
app.use(bodyParser.json()); // for parsing application/json)
app.use('/scrape',scrapeRouter);
app.use('/keyword',keywordRouter);
mongoose.connect(db.url);
var port =3006;


app.listen(port,function(){
    console.log(`Magic Happen on${port}`);
})
