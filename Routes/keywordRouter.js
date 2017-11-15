var express = require ('express');

var keywordRouter =  express.Router();
var scrapeHistory = require('../model/scrapeModel');

keywordRouter.get('/',function(req,res){
    scrapeHistory.find({},function(err,scrapeDataArray){
        var array = [];
        scrapeDataArray.forEach(elem => {
            array.push(elem.keyword);
        });
        res.json(array);
    })
});

module.exports = keywordRouter;
