var Scraper = require ('images-scraper');
var google = new Scraper.Google();


function GetImageUrlByWord(word,numberOfFile){
    console.log('In image');
    return google.list({
        keyword:word,
        num: 15,
        detail: true,
    }).then(function(res){
        console.log('send image object');
        console.log(res);
        return res;
    })
}


module.exports = GetImageUrlByWord;
