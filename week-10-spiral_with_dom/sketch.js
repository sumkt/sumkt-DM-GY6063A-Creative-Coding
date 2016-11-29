var angle = 0, 
    radius = 10, 
    angleIncrement=0.1,
    radiusIncrement=0.5,
    minRadius=10, 
    maxRadius=250,
    mySlider;
    
function setup() {
  createCanvas (500,500);
  fill(128, 218, 235);
  stroke(255);
  mySlider =createSlider(0, 10, 5);
}


function draw() {
  var x = radius*Math.cos(angle), 
      y = radius*Math.sin(angle);
  background(239,239,239,50);
  push();
  translate(width/2, height/2);
  ellipse(x, y, 30, 30);
  pop();
  angle+=mySlider.value()/10;
  radius+=radiusIncrement; 
  if(radius< minRadius || radius > maxRadius){
    radiusIncrement*=-1;
  }
}