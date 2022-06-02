var img = "";
var status = "";
var objects = [];
var percent = 0;
var name = "";
var x = 0;
var y = 0;
var width = 0;
var height = 0;

function preload() {
    img = loadImage("fruitbasket.jpg");
}

function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();

    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 650, 450);

    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            name = objects[i].label;
            x = objects[i].x;
            y = objects[i].y;
            width = objects[i].width;
            height = objects[i].height;

            fill("red");
            text(name + " " + percent + "%", x, y);
            noFill();
            stroke("red");
            rect(x, y, width, height);
            console.log("Showing Result Now.")
        }
    }
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

        objects = results;
    }
}
