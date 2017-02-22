function setup() { 
  createCanvas(400, 400);
  colorMode (HSB);
   fill(212,77,66)
  rect(0,0,400,400);
} 


var value = 0;
function draw() {
  colorMode (HSB);
  fill(value);
  rectMode (CENTER);
  strokeWeight (2);
  stroke(255);
  rect(200, 200, 150,150);


}
function mouseDragged() {
  value = value + 200;
  if (value > 255) {
    value = 0;
    
  }
}

