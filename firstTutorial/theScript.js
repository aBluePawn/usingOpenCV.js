let cv = require('./opencv');

document.body.classList.add('loading');
      
function onOpenCVReady() {
    document.body.classList.remove('loading');
}

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');

inputElement.onchange = function() {
    imgElement.src = URL.createObjectURL(event.target.files[0]);
};

imgElement.onload = function() {
    let image = cv.imread(imgElement);
    cv.imshow('imageCanvas', image);
    image.delete();
}