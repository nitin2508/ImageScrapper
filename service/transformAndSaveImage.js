var Jimp = require("jimp");

function transformAndSaveImage(imageArray,keyword){

    function getFileName(imageObj,index){
        return Jimp.read(imageObj.url)
        .then((image)=>{
            if(image){
                console.log("nitin",image);
             image.greyscale();
             var file = `${keyword}${index}.${image.getExtension()}`;
             image.write('images/'+keyword+'/'+file);
             return file;
         }
        })
    }
 var promises = imageArray.map((imageObj,index) =>getFileName(imageObj,index));
 return  Promise.all(promises);

}

module.exports = transformAndSaveImage;
// var promises = [];
//
//  for (let i = 0; i < imageArray.length; i++) {
//      var promise = Jimp.read(imageArray[i].url).then((image)=>{
//          image.greyscale();
//          var file = `${keyword}${i}.${image.getExtension()}`;
//          image.write(file)
//          return file;
//      })
//      promises.push(promise);
//
//  }
