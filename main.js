function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log(" The poseNet model is loaded")
}


function draw()
{
image(video,0,0, 400,400);
circle(Nose_x, Nose_y, 20);
fill(225,0,0);
stroke(225,0,0);
}
Nose_x=0;
Nose_y=0;

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results)
    Nose_x=results[0].pose.nose.x;
    Nose_y=results[0].pose.nose.y;
    console.log("The nose x=" + Nose_x);
    console.log("The nose y=" + Nose_y);
;

}
}


function take_snapshot()
{
    save("Clown_filter.png")
}