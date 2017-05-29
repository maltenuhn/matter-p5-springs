var   Engine = Matter.Engine,
      // Render = Matter.Render,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var boxes = [];
var circles = [];
var boundaries = [];

function preload() {
  ding = loadSound("beep.mp3");
}

function mousePressed(){
  ding.play();

  var rand = random(0,2)

  if (rand > .7) {
    var tempBox = new Box(mouseX, mouseY, random(5, 30), random(5, 30));
    boxes.push(tempBox);
  }
  else {
    var tempCircle = new Circle(mouseX, mouseY, random(5, 30));
    circles.push(tempCircle);
  }


}




var setup = function(){
  createCanvas(800, 600)
  background(360,100,100)
  colorMode(HSB);

  // create matter engine
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(mouseX, 20, 50, 20);

  tempBoundary = new Boundary(width / 2, height - 10, width, 20);
  boundaries.push(tempBoundary);

  Engine.run(engine);


  // create collision function
  function collision(event){
    var pairs = event.pairs;
    for (var i = 0; i < pairs.length; i++){
        var bodyA = pairs[i].bodyA;
        var bodyB = pairs[i].bodyB;
        console.log(bodyA.label, bodyB.label)
      }
  }

  // register callback to collision function
  Events.on(engine, 'collisionStart', collision);

}

var draw = function() {
  background(100,20,100);
  for (b of boxes){
    b.show();
  }

  for (c of circles){
    c.show();
  }

  for (b of boundaries){
    b.show();
  }


}
