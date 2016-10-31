function setup() {
  var angle = 0;
  createCanvas(1500,1500);
  background(173, 227, 227);
  for(var i=90; i < height; i+=180){
    for(var j=90; j < width; j+=180){
      push();
      translate(i,j);
      rotate(angle);
      penguin();
      pop();      
      angle += 0.1;
    }
  }
  noLoop();
}


// function draw(){
  
// }

function penguin() {
  fill(0);
  noStroke();
  ellipse(0, 0, 180,180); //head
  fill(255);
  rect(-70, -10, 140, 67); //nose bridge
  arc (0, 0, 180, 180, PI/5, PI*4/5); // white curve face
  ellipse(-40, -10, 60, 60);//left white eye area
  ellipse(40, -10, 60, 60); //right white eye area
  fill(0);
  rect(-10,-10, 20, 30);
  ellipse(-45, -10, 22, 22); //left eyeball
  ellipse(45, -10, 22, 22); //right eyeball
  fill (255);
  ellipse (-45, -10, 6, 6); //left eye detail
  ellipse (45, -10, 6, 6); // right eye detail
  fill(252, 102, 33);
  ellipse(0, 25, 35, 35); // nose 
}
