const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine,world;
var gameState = "story";

function preload() {
//preload the images here
bg = loadImage("BACKGROUND.png");
sh1 = loadImage("Superhero-01.png");
sh2 = loadImage("Superhero-02.png");
m1 = loadImage("Monster-01.png");
m2 = loadImage("Monster-02.png");

}

function setup() {
  createCanvas(1535, 650);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground();

  b1 = new Block(600,500,50,50);
  b2 = new Block(600,450,50,50);
  b3 = new Block(600,400,50,50);
  b4 = new Block(600,350,50,50);
  b5 = new Block(600,300,50,50);
  b6 = new Block(600,250,50,50);
  b7 = new Block(600,200,50,50);
  b8 = new Block(600,150,50,50);
  b9 = new Block(600,100,50,50);
  b10 = new Block(600,50,50,50);
  b11 = new Block(650,500,50,50);
  b12 = new Block(650,450,50,50);
  b13 = new Block(650,400,50,50);
  b14 = new Block(650,350,50,50);
  b15 = new Block(650,300,50,50);
  b16 = new Block(650,250,50,50);
  b17 = new Block(650,200,50,50);
  b18 = new Block(650,150,50,50);
  b19 = new Block(650,100,50,50);
  b20 = new Block(650,50,50,50);
  b21 = new Block(700,500,50,50);
  b22 = new Block(700,450,50,50);
  b23 = new Block(700,400,50,50);
  b24 = new Block(700,350,50,50);
  b25 = new Block(700,300,50,50);
  b26 = new Block(700,250,50,50);
  b27 = new Block(700,200,50,50);
  b28 = new Block(700,150,50,50);
  b29 = new Block(700,100,50,50);
  b30 = new Block(700,50,50,50);
  b31 = new Block(750,500,50,50);
  b32 = new Block(750,450,50,50);
  b33 = new Block(750,400,50,50);
  b34 = new Block(750,350,50,50);
  b35 = new Block(750,300,50,50);
  b36 = new Block(750,250,50,50);
  b37 = new Block(750,200,50,50);
  b38 = new Block(750,150,50,50);
  b39 = new Block(750,100,50,50);
  b40 = new Block(750,50,50,50);
  b41 = new Block(800,500,50,50);
  b42 = new Block(800,450,50,50);
  b43 = new Block(800,400,50,50);
  b44 = new Block(800,350,50,50);
  b45 = new Block(800,300,50,50);
  b46 = new Block(800,250,50,50);
  b47 = new Block(800,200,50,50);
  b48 = new Block(800,150,50,50);
  b49 = new Block(800,100,50,50);
  b50 = new Block(800,50,50,50);

  hero = new Hero(100,300,400,250);
  slingshot = new Slingshot(hero.body,{x : 100,y : 10});
  monster = new Monster(1100,300,450);

}

function draw() {
  background(bg);
  Engine.update(engine);

  if (gameState == "story") {
    textSize(50);
    fill("darkblue");
    textFont("forte")
    text("HI , SHLOK HERE , ACTUALLY I WANT YOUR HELP. I WANT TO SAVE MY CITY , CAN U BECOME A SUPERHERO AND SAVE MY CITY,OH YA YOU HAVE THE SUPER PUNCH POWER WHICH CAN BREAK ANYTHING EVEN A BUILDING,SO PLEASE HELP , IF YOU ARE READY PRESS 'space'",100,100,1400,500);
  }

  if (gameState == "play") { 
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();
  b47.display();
  b48.display();
  b49.display();
  b50.display();
  hero.display();
  slingshot.display();
  monster.display();
  }
  
}

function mouseDragged() {

  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}

function mouePressed() {
  if (keyCode === "k") {

    
  }
}

function keyPressed() {
  if (keyCode === 32) {
    gameState = "play"
  }
}

