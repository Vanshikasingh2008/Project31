const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,bird,pig1,log1,box3;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
}