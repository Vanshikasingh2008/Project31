class Particle{
    constructor(x,y){
        var op = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,10,op);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10);
        pop();
    }
}