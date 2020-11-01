// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering


// Set the configuration for your app
// TODO: Replace with your app's config object



var myVar = setInterval(myTimer, 10000);
function myTimer() {
var fs = require('fs');
var dirPath = './images/';
let  content = "";
fs.readdir(dirPath, (err, dir)=>{
      var array=[];
  for(var i=0; i<dir.length; i++){
      let fileName = dir[i];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(fileName)){

  }else{



      let filePath=dirPath+"/"+fileName;
     // console.log("A: "+fileName);
      array.push(fileName);
}
  }
console.log(array);


i = Math.floor(Math.random()*array.length);
var url = (dirPath+array[i]);

console.log(url);

let image = new Image();
image.onload = function () {
 console.log ("pic Height: " + this.naturalHeight);
 console.log ("pic Width: " + this.naturalWidth);
 // Mach was mit dem Bild
};
image.src = url;
var picdiv = document.getElementById('frame');

unfade(picdiv,url)
//fade(picdiv,url)



function unfade(element,url) {
    element.style.display = 'block';
        element.style.backgroundSize ="contain";
        element.style.backgroundRepeat="no-repeat";
        element.style.backgroundPosition = "center center";

        $(document).ready(function(){
          $('#frame').css('background-image', 'url(' + url + ')');
          $("#frame").fadeIn("slow");
});


}



})

}

window.onload = myTimer;

function hideCursor(){
    document.body.style.cursor = "none";
}
setTimeout(hideCursor,1000);
