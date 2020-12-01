const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
    createCanvas(400, 400);

    engine = Engine.create(); // to create physics engine
    world = engine.world; // world created

    var Goptions = { isStatic: true }

    ground = Bodies.rectangle(200, 380, 400, 20, Goptions);
    World.add(world, ground);
    //console.log(object);


    var Boptions = { restitution: 0.8 }

    ball = Bodies.circle(100, 100, 20, Boptions);
    World.add(world, ball);
    //console.log(object);


}

function draw() {
    background(0, 0, 0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    ellipseMode(RADIUS);
    circle(ball.position.x, ball.position.y, 20);

}