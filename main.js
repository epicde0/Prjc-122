img = "";
function preload(){
img=loadImage("Frame.png")

}



function setup() {
    canvas = createCanvas(640,480);
     canvas.position(110,250)
     video = createCapture(VIDEO);
     video.hide();


}

function draw() {
    image(img,0,0,640,480)
image(video,150,150,400,240);
}
function take_snapshot(){
save('YUvaraj.png');
}
