class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution:0.3,
        friction:1.0,
        density:1.0
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }
}
