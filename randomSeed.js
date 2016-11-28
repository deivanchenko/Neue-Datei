//Nichts Neues
function setup() {
var col = {
  r: 2,
  g: 33,
  b: 222
}
}
function draw() {
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
}
