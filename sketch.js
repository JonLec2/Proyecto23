var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var comidaImg, comidaSprite, comida;
var arbolImg, arbolSprite, arbol;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	comidaImg=loadImage("comida.png")
	arbolImg=loadImage("arbol1.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	comidaSprite=createSprite(width/2, 250, 10, 10)
	comidaSprite.addImage(comidaImg)
	comidaSprite.scale=0.025
	
	arbolSprite=createSprite(600, 500, 20, 20);
	arbolSprite.addImage(arbolImg)
	arbolSprite.scale=0.2

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	comida=Bodies.circle(width/2, 250, 5, {restitution:0.4 , isStatic: true  })
	World.add(world, comida);

arbol=Bodies.rectangle(600, 500, 230, 20, {isStatic:true});
World.add(world, arbol)

	//Crea el Suelo
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
comidaSprite.x=comida.position.x
comidaSprite.y=comida.position.y

arbolSprite.x=arbol.position.x
arbolSprite.y=arbol.position.y

  if(keyDown("left_arrow")){
	  helicopterSprite.x=helicopterSprite.x-20
	  Matter.Body.translate(packageBody, {x:-20, y:0})
	  Matter.Body.translate(comida, {x:-20, y:0} )
  }
  
  if(keyDown("right_arrow")){
	  helicopterSprite.x=helicopterSprite.x+20
	  Matter.Body.translate(packageBody, {x:+20, y:0})
	  Matter.Body.translate(comida, {x:+20, y:0})
  }

if(keyDown("down_arrow")){
	Matter.Body.setStatic(packageBody, false)
}


if(keyDown("m")){
	Matter.Body.setStatic(comida, false)
}

  drawSprites();
  textSize(20)
  text("Presiona m para soltar los alimentos", 80, 80)
  text("Presiona la tecla abajo para soltar los insumos", 80, 120)
  
 
}
