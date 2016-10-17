var colorFrom, colorTo;
var colorFrom2, colorTo2;
var rectStep =20;

function setup() {
  createCanvas(500,500);
  noLoop();
}

function draw() {
  
  background(255);
  
  colorFrom = color(245, 62, 87); 
  
  colorTo = color(102, 53, 53);
  
  colorFrom2 = color(102, 53, 53);;
  
  colorTo2 = color(0);
  

  for(var x=0; x < width/2; x += rectStep){
    noStroke();

    var lerpAmt = map(x, 0, width/2, 0, 1.0);
    
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
  
  for(var x= width/2; x < width; x += rectStep){
    noStroke();
   
    var lerpAmt = map(x, width/2, width, 0, 1.0);
    
    var lerpedCol = lerpColor(colorFrom2,
      colorTo2,
      lerpAmt);    
    fill(lerpedCol);
    rect(x,0,rectStep,height);

  }
}
 