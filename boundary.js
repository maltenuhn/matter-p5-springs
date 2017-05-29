function Boundary(x, y, w, h) {
  // this is a wrapper for the matter.js object

  var options = {
    friction: 0.0,
    restitution: .4,
    isStatic: true,
    angle: PI / 7
  }

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push()  ;

        translate(pos.x , pos.y);
        rotate(angle);
        rectMode(CENTER);
        // console.log(255 * ((angle % 6.28) / 6.28 ));
        fill(255,0, 255 * ((angle % 3.14) / 6.28 ));
        rect(0,0,this.w, this.h);


      pop();

  }




}
