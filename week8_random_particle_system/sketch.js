function Particle(xpos, ypos, size, color, speed){
    
  	this.size = size;
    this.speed = speed;
    this.xpos = xpos;
    this.ypos = ypos;
    this.color = color;
}
Particle.prototype.constructor = Particle;
Particle.prototype.increaseSpeed = function(){
	this.speed ++;
};

var particleSystem = [];

function setup() {
  createCanvas(600,600); 
  background(0);
  stroke(140);
  //add the particles to our empty particle system array
  for(var i=0; i < 1200; i++){
  	particleSystem.push( new Particle(random(width), random(height),random(-15,15),{
  	  r:random(255),g:random(50),b:random(220),a:random(255)
  	}, random(-1,1)));
  }
} 

function draw() {
  background(0);
  //loop through each of the particles in the array and read out the properties into our ellipse call
  for(var i=0; i < particleSystem.length; i++){
    var p= particleSystem[i];
    fill(p.color.r, p.color.g, p.color.b, p.color.a);
    ellipse(p.xpos, p.ypos, p.size, p.size);
    particleSystem[i].xpos += particleSystem[i].speed;
    particleSystem[i].speed *= -1;
    particleSystem[i].ypos += particleSystem[i].speed;
  }
}