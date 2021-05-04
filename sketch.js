const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;
var sand1,sand2,sand3,sand4,sand5,sand6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);

    sand1 = new sand1(505,450,10);
    sand2 = new sand1(510,450,10);
    sand3 = new sand1(515,450,10);
    sand4 = new sand1(520,450,10);
    sand5 = new sand1(525,450,10);
    sand6 = new sand1(515,445,10);
    sand7 = new sand1(520,445,10);
    sand8 = new sand1(525,445,10);
    sand9 = new sand1(530,445,10);
    sand10 = new sand1(535,445,10);
    sand11 = new sand1(530,445,10);
    sand12 = new sand1(535,445,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();

    sand1.display();

    
 
}