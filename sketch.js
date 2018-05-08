var pamp;


function setup(){
  createCanvas (400,400);
  background (95,72,75);
  pamp = new slice(width/2, height/2, width, height);
}

function draw(){
  background (95,72,75);
  pamp.show(); 
  pamp.update(); 
}