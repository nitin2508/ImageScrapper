var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrapeHistory = new Schema({
    keyword:{
        type:String,
        required:true
    },
    imageUrls:[]
})

var scrapeHistorys = mongoose.model('scrapeData', scrapeHistory);
module.exports = scrapeHistorys;
