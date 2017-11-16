var express = require('express');
var GetImageUrlByWord = require('../service/getImageUrls');
var transformAndSaveImage = require('../service/transformAndSaveImage')
var scrapeHistory = require('../model/scrapeModel');

var scrapeRouter = express.Router();
var numberOfFile = 15;

scrapeRouter.post('/',function(req,res){
    if(req.body.keyword){
        console.log('Keyword')
        GetImageUrlByWord(req.body.keyword,15)
        .then(function(imageObj){
            transformAndSaveImage(imageObj,req.body.keyword)
            .then(function(images){
                console.log(images);
                console.log(req.body.keyword);
                var obj={
                    keyword:req.body.keyword,
                    imageUrls:images
                };
                scrapeHistory.create(obj,function(err,scrapeHistoryObj){
                    res.json(scrapeHistoryObj);
                })

            },function(err){
                console.log(err);
                console.log('reject');
            })
        })
    }
});

scrapeRouter.get('/:keyword',function(req,res){
    scrapeHistory.find({keyword:req.params.keyword}, function(err, scrapeData) {
           if (err) throw err;
           res.json(scrapeData);
       });
})

module.exports = scrapeRouter;
