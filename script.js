var leftWristXCoordinate = 0;
var leftWristYCoordinate = 0;
var rightWristXCoordinate = 0;
var rightWristYCoordinate = 0;

var song2 = "";
var song4 = "";

function preload() {
    song2 = loadSound("music.mp3");
    song4 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNetModel = ml5.poseNet(video, modelLoaded);
    poseNetModel.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet model is working");
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function gotPoses(results) {
    if(results > 0) {
        console.log(results);
        leftWristXCoordinate = results[0].pose.leftWrist.x;
        leftWristYCoordinate = results[0].pose.leftWrist.y;
        rightWristXCoordinate = results[0].pose.rightWrist.x;
        rightWristYCoordinate = results[0].pose.rightWrist.y;
    }
}