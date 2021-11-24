// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.



const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const got = require("got");
var fs = require('fs');

var dirPath = './images/';
local_array = [];
remote_array = [];


const serviceAccount = require('./firebase.json');

 initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'my-piframe.appspot.com'
});


const bucket = getStorage().bucket();


function getLocalArray(){
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, dir) => {
      if (dir.length == 0) {
        resolve(local_array)
      }

      console.log(dir.length)
      for (var i = 0; i < dir.length; i++) {
          let fileName = dir[i];

          var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
          if (!allowedExtensions.exec(fileName)) {} else {
              let filePath = dirPath + "/" + fileName;
               console.log("A: "+fileName);
              local_array.push(fileName);
              resolve(local_array)
            
          }
      }
  })
  })
}


    async function getRemoteArray(){
    const [files] = await bucket.getFiles();

    // console.log('Files:');
     files.forEach(file => {
       // console.log(file.name);
       var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
       if (!allowedExtensions.exec(file.name)) {} else {
         var destFileName = file.name ;
         var item = destFileName.replace("images/", "");             
         remote_array.push(item);    
       }
         
     });
    }
  
   

function compareArrays(){
  return new Promise((resolve, reject) => {
   
    local_array.filter(onlyUnique)
    remote_array.filter(onlyUnique)   
    console.log(local_array)
    console.log(remote_array)  
    
    local_array.forEach(filechecker_local)
    remote_array.forEach(filechecker_cloud)
    local_array = [];
    remote_array = [];
  })
}



function filecheck(){

  getLocalArray()
.then(getRemoteArray)
.then(compareArrays)

}
filecheck()
setInterval(filecheck, 1800000);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


 //



function filechecker_local(element) {

  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(element)) {} else {
  console.log(element)

  var arry_includes = remote_array.includes(element)
  console.log(arry_includes)

  if (arry_includes == true) {
      //// everything ok dont need to to anything
     // console.log("everything ok dont need to to anything --  local")
  }

  if (arry_includes == false) {
      //file was removed in cloud can dlet also local_array
      const path = './images/' + element;
      console.log("remove "+element)
      try {
          fs.unlinkSync(path)
          //file removed
      } catch (err) {
          console.error(err)
      }
  }
}
}




function filechecker_cloud(element) { 

  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(element)) {} else {
  
  //  console.log(element)
  var arry_includes = local_array.includes(element)
  //console.log(arry_includes)
  if (arry_includes == true) {
      //// everything ok dont need to to anything
     // console.log("everything ok dont need to to anything --  remote")
  }
  if (arry_includes == false) {
    
    console.log("need to download - Cloud")
    //downloadRemoteFiles()    
     //downloadFile(element)
     
      const destFileName = 'images/' + element;
      const options = {
        destination: destFileName,
      };
    
      // Downloads the file
      bucket.file('images/' + element).download(options);   
      console.log("download " +element  );
     
  }

  }
}


var myVar = setInterval(myTimer, 30000);

function myTimer() {

  let p = new Promise((resolve, reject) => {
      var fs = require('fs');
      var dirPath = './images/';
      let content = "";
      fs.readdir(dirPath, (err, dir) => {
          var array = [];
          for (var i = 0; i < dir.length; i++) {
              let fileName = dir[i];
              var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
              if (!allowedExtensions.exec(fileName)) {

              } else {

                  let filePath = dirPath + "/" + fileName;
                  // console.log("A: "+fileName);
                  array.push(fileName);
              }
          }
        //  console.log(array);


          i = Math.floor(Math.random() * array.length);
          var url = (dirPath + array[i]);

          console.log(url);

          let image = new Image();
          image.onload = function() {
              console.log("pic Height: " + this.naturalHeight);
              console.log("pic Width: " + this.naturalWidth);
              // Mach was mit dem Bild
          };
          image.src = url;
          resolve(url);
      })
  });

  p.then((url) => {

      setTimeout(() => {
          var element = document.getElementById('frame');

          element.classList.remove("fade-in");
          void element.offsetWidth;
          element.classList.add('fade-out');

      }, 2000);
      return url;
  }).then((url) => {
      setTimeout(() => {
          console.log(url);
          var element = document.getElementById('frame');

          if (url == "./images/undefined") {
              
              if (document.getElementById("errorMSG")) {
                  document.getElementById("errorMSG").remove();
              }

              var errorMSG = document.createElement("h1");
              errorMSG.innerHTML = "Das Bild existiert nicht";
              errorMSG.setAttribute("id", "errorMSG")
              errorMSG.setAttribute("style", "color:white;margin-top:50%;margin-left:50%;")
              document.body.appendChild(errorMSG);

          } else {
              if (document.getElementById("errorMSG")) {
                  document.getElementById("errorMSG").remove();
              }
          }

          element.classList.remove("fade-out");
          void element.offsetWidth;
          element.classList.add('fade-in');
          element.style.display = 'block';


          element.style.backgroundImage = "url('" + url + "')";
          element.style.backgroundSize = "contain";
          element.style.backgroundRepeat = "no-repeat";
          element.style.backgroundPosition = "center center";
          element.style.animation = "animation: fadeInFromNone 3.5s ease-in";


      }, 3000);

      return url;
  });

}


window.onload = myTimer;

function hideCursor(){
   // document.body.style.cursor = "none";
}
setTimeout(hideCursor,1000);

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
  }
})