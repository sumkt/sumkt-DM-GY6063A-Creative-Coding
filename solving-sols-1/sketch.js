function setup() {
  //put setup code here
  createCanvas(600, 400);
}

function draw() {
  // put drawing code here
  background(255, 255, 255);
  fill(232, 232, 232, 100);
  noStroke();
  rect(224, 0, 180, 400);
  rect(0, 110, 600, 180);
  beginShape();
  vertex(0, 290);
  vertex(440, 0);
  vertex(600, 0);
  vertex(600, 110);
  vertex(110, 400);
  vertex(0, 400);
  endShape(CLOSE);
}