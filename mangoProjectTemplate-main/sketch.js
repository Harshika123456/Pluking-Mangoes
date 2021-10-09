
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    stone1 = new stone(235,420,30)
	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,30);
	mango8=new mango(1140,150,30);
	mango9=new mango(1100,230,30);
	mango10=new mango(1200,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcher1 = new launcher(stone1.body, {x:235, y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcher1.display();

  groundObject.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launcher1.fly();
}
