var img = "";
var status = "";

function preload() {
    img = loadImage("fruitbasket.jpg");
}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();

    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {

}

function modelLoaded() {
    console.log("Model is Loaded.");
    status = true;
    objectDetection.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}