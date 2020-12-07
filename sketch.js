const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var division = [];

var divisionHeight = 300

function setup() {
createCanvas(480,800);

engine = Engine.create()
world = engine.world;



  ground = new Ground(240,790,800,20);
  
  division1 = new Divisions(80,750,10,250);
  divition2 = new Divisions(160,750,10,250);
  divition3 = new Divisions(240,750,10,250);
  divition4 = new Divisions(320,750,10,250);
  divition5 = new Divisions(400,750,10,250);




  // plinko1 = new Plinko(380,50,10);
  // plinko2 = new Plinko(330,50,10);
  // plinko3 = new Plinko(280,50,10);
  // plinko4 = new Plinko(230,50,10);
  // plinko5 = new Plinko(180,50,10);
  // plinko6 = new Plinko(130,50,10);
  // plinko7 = new Plinko(80,50,10);
  // plinko8 = new Plinko(30,50,10);
  // plinko9 = new Plinko(380,170,10);
  // plinko10 = new Plinko(330,170,10);
  // plinko11 = new Plinko(280,170,10);
  // plinko12 = new Plinko(230,170,10);
  // plinko13 = new Plinko(180,170,10);
  // plinko14 = new Plinko(130,170,10);
  // plinko15 = new Plinko(80,170,10);
  // plinko16 = new Plinko(30,170,10);
  // plinko17 = new Plinko(380,250,10);
  // plinko18 = new Plinko(330,250,10);
  // plinko19 = new Plinko(280,250,10);
  // plinko20 = new Plinko(230,250,10);
  // plinko21 = new Plinko(180,250,10);
  // plinko22 = new Plinko(130,250,10);
  // plinko23 = new Plinko(80,250,10);
  // plinko24 = new Plinko(30,250,10);


}

function draw() {
  background(255,255,255);
  
  
  for(var j = 40; j<=width; j=j+50){
    plinko.push(new Plinko(j,75,10));
  }
  for(var z = 15; z<=width; z=z+50){
   plinko.push(new Plinko(z,175,10));
  }
  for(var n = 40; n<=width; n=n+50){
  plinko.push(new Plinko(z,275,10));
  }


  ground.display();
  
  division1.display();
  divition2.display();
  divition3.display();
  divition4.display();
  divition5.display();
  
  // plinko1.display();
  // plinko2.display();
  // plinko3.display();
  // plinko4.display();
  // plinko5.display();
  // plinko6.display();
  // plinko7.display();
  // plinko8.display();
  // plinko9.display();
  // plinko10.display();
  // plinko11.display();
  // plinko12.display();
  // plinko13.display();
  // plinko14.display();
  // plinko15.display();
  // plinko16.display();
  // plinko17.display();
  // plinko18.display();
  // plinko19.display();
  // plinko20.display();
  // plinko21.display();
  // plinko22.display();
  // plinko23.display();
  // plinko24.display();

  
  
  drawSprites();








}