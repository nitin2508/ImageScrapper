var Scraper = require ('images-scraper');
var google = new Scraper.Google();


function GetImageUrlByWord(word,numberOfFile){
    return google.list({
        keyword:word,
        num: 15,
        detail: true,
    }).then(function(res){
        return res;
    })
}


module.exports = GetImageUrlByWord;
