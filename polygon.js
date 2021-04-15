class Polygon{
    constructor(x, y, r){
        var options = {
            restitution:0.0,
            friction:1.0,
            density:1.0
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.diameter = 2*this.r;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.diameter, this.diameter);
    }
}