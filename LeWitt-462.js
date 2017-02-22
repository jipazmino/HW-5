
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  var x = 0
  var y = 0
  while (x <= 1000) {
    noFill();
    strokeWeight(10);
    stroke(255);
    ellipse(0, 200, x, y);
    x = x + 40
    y = y +  40
  }
}
