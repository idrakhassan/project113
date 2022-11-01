function preload() {
}



function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

 
}

function draw() {
  image(video, 90, 100,500, 300);
 fill(204,255,255);
 stroke(204,255,255);
 circle(30,50,40);
 circle(30,450,40);
 circle(620,50,40);
 circle(620,450,40);
fill(255,255,204);
stroke(255,255,204);
rect(50,40,550,20)
rect(50,435,550,20)
rect(50,40,20,400)
rect(600,40,20,400)
}

function take_snapshot(){    
  save('student_name.png');
}



