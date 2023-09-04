function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
img=""
status="";
function preload(){
img=loadImage('fruits.jpg')
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("red apple", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 40, 450, 350);

    fill("#FF0000");
    text("green apple", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if (error) {
        console.log(error);
    }
    console.log(results);}
