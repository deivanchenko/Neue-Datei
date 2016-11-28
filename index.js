//Nichts Neues
var xoff = 0.0;
var col = {
  
  r: 155,
  g: 40,
  b: 103
}

function draw() {
<<<<<<< HEAD
	createCanvas(400,200);
randomSeed(99);
for (var i=0; i < 100; i++) {
  var r = random(0,100,10);
  col.r = random(0, 2);
  col.g = random(0, 33);
  col.b = random(0, 222);
  strokeWeight(4);
  stroke(col.r,col.g,col.b);
  noFill();
  arc(i, 0,100, 160,i,50);
}
=======
  createCanvas(200,200);
  background(214);
  col.r = random(100, 155);
  col.g = random(0, 40);
  col.b = random(0, 103);
  xoff = xoff + .01;
  var n = noise(xoff) * width;
  var x = randomGaussian(50,50);
  fill(col.r,col.g,col.b);
  ellipse(x, n, n, n);
  ellipse(n, x, n, n);
  ellipse(n, n, x, n);
  ellipse(n, n, n, x);
>>>>>>> origin/master
}
