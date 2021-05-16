class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:7.8,
      }
      this.x = x
      this.y = y
      this.radius = radius
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(2)
      stroke("black");
      fill("magenta");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }