var waveLengthOne = 38.0;
var waveLengthTwo = 375.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var colorFrom, colorTo, lerpAmt = 0;

function setup(){
  createCanvas(400,400);
   colorMode(HSB,360,100,100);
   colorFrom = color(144,66,66);
   colorTo = color(270,66,100);
}

function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  strokeWeight(1);
  stroke(222);
  var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmt);
  fill(lerpedColor);
  lerpAmt = map(sin(angle), -1, 1, 0, 1);
  translate(width/2, height/2);
  
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  var diameter = map(sin(angle),-1,1,2,16);
  ellipse(x,y, diameter, diameter); 
  }
endShape();
pointCount++;
}