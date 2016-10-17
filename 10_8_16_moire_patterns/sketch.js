var a = 325, b = 150, c = 375, d = 150, e = 350, f = 200;
var i = 1;

function setup() {
  createCanvas (600,600);
  background (255);
  stroke(0);
  strokeWeight(2);
  
  var x = 0;
  for (var x = 0; x < width; x = x + 4) {
  line (x, 0, x, 600);
  }
  
}

function draw() {
  noFill();
  push();
  rotate(PI/4);
  beginShape();
    vertex(a,b);
    vertex(c,d);
    vertex(e,f);
  endShape(CLOSE);  
  pop();
  
  beginShape();
    vertex(a,b);
    vertex(c,d);
    vertex(e,f);
  endShape(CLOSE);  
  a = a - 7;
  b = b - 7;
  c = c + 14;
  d = d - 7;
  // e = e - 15;
  f = f + 14;
  
  if (i >= 30) {
    noLoop();
    
  }
  i++;
}