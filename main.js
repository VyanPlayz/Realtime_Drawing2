function setup(){
    canvas = createCanvas(400 , 400);
    canvas.position(1300 , 250);

    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.position(400 , 250)

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized Successfully!!! 👍👍");
}

function draw(){
    background("gray");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}