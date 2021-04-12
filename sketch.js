var ironMan;
var bg;
var city,cityImage;
var ironManAnimation,ironManAnimation2;
var enemy,enemyAnimation1;
var enemyGroup;
var repulsor;
var COUNT=0;
var NOTCOUNT=1;
var STATE=NOTCOUNT;
var no=500;


function preload(){
  ironManAnimation=loadAnimation("Ironman1/1.png","Ironman1/2.png","Ironman1/3.png",
  "Ironman1/4.png");

  ironManAnimation2=loadAnimation("Ironman2/100.png","Ironman2/200.png","Ironman2/300.png",
  "Ironman2/400.png","Ironman2/500.png","Ironman2/600.png","Ironman2/700.png","Ironman2/800.png",
  "Ironman2/900.png","Ironman2/1000.png","Ironman2/1100.png");

  

  cityImage=loadImage("Background/2.png");

  enemyFly=loadAnimation("Magia/3.png","Magia/4.png");
  fire = loadAnimation("fire/1.png","fire/2.png","Ironman2/100.png","Ironman2/200.png","Ironman2/300.png",
  "Ironman2/400.png","Ironman2/500.png","Ironman2/600.png","Ironman2/700.png","Ironman2/800.png",
  "Ironman2/900.png","Ironman2/1000.png","Ironman2/1100.png")

  skyImage=loadImage("Background/1.png");

  shoot=loadImage("Fire.png");

}



function setup(){

  createCanvas(1200,500);
  sky=createSprite(-3500,height/2,500,500);
  sky.scale=50;
  sky.addImage("skies",skyImage)
  sky.velocityX=2;
  
  city=createSprite(width/2,300,width*2,10);
  city.scale=5;
  city.addImage("City",cityImage);
  city.velocityX=180;
  enemyGroup=new Group();
  repulsorGroup=new Group();
  ironMan=createSprite(900,270,30,30);
  ironMan.addAnimation("Iron Man",ironManAnimation);

  ironMan.scale=0.35;
  

  
}


function draw(){
console.log(no);
  background("white");
  if(city.x>4900){
    city.x=-3600;
  }

  if(sky.x>3000){
    city.x=-3500;
  }
  
  

  if(keyDown(UP_ARROW)){
    ironMan.y-=10;
  }

  if(keyDown(DOWN_ARROW)){
    ironMan.y+=10;
  }

  Repulsor()
  Enemy()


  if(STATE===NOTCOUNT){
    no=500;
    if(keyDown("space")){
      STATE=COUNT;
    }
    }


    if(STATE===COUNT){
      no-=4;
      if(no<0){
        STATE=NOTCOUNT;
      }
    }

  

  drawSprites();
  
  textSize(30);
  stroke("black");

}





function Enemy(){
  if(frameCount%Math.round(random(500,1050))===0){
    enemy = createSprite(-100,random(100,400),50,80);
    enemy.addAnimation("Enemy",enemyFly);
    
    enemy.scale=0.27;
    enemy.velocityX=1;
    enemyGroup.add(enemy);
  }
 
}

function Repulsor(){
  if(keyDown("space")&&STATE===NOTCOUNT){
    repulsor=createSprite(900,ironMan.y,20,20);
    repulsor.addImage("shhots",shoot);
    repulsor.scale=0.4;
    repulsor.velocityX=-80

    repulsor.lifetime=150;
    repulsorGroup.add(repulsor)

    ironMan.changeAnimation("fires",fire);
    }


}