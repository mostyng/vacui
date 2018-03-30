function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  // background(255);
  var fr = 5; //starting FPS

  frameRate(fr); // Attempt to refresh at starting FPS

  // noLoop();

}

function draw() {


  background(255);

  stroke(255);
  fill(37,0,255);
  // fill(255,0,0);

  var lipL = random(width*0.1,width*0.3);
  var lipR = width-lipL;

  var neckR = random(width*0.55, width*0.75);
  var neckL = width-neckR;

  var centL = random(height*0.2, height*0.8);
  var centR = centL;

  var baseR = random(width*0.55, width*0.75);
  var baseL = width-baseR;

  var bottL = random(width*0.1,width*0.3);
  var bottR = width-bottL;

//NEW SHAPE
  beginShape();

  vertex(lipL, height * 0);
  vertex(lipR, height * 0);

  vertex(neckR, height * 0.15);
  vertex(width, centR);
  vertex(baseR, height * 0.85);
  vertex(bottR, height);

  vertex(bottL, height);
  vertex(baseL, height * 0.85);
  vertex(0, centL);
  vertex(neckL, height * 0.15);

  endShape(CLOSE);

}


function mousePressed() {
   // saveFrames('pots', 'png', 1, 5, function(data) {
   // print(data);
   // });
   redraw();

   // saveFrames('pots', 'png', 3, 5);

 }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


