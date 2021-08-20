 //WebSearchVideo 

 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
var bg
var play;
var gameState = 0;
var score = 0;
var score1 = 0;
var count=0; 
var playerScore=0;
var x = 3;
var computerScore =0;
function preload(){
  play=loadImage('bioimages/play.png');
  saveImg=loadImage('bioimages/save.PNG')
  CH1=loadImage('bioimages/ch1.png');
  CH2=loadImage('bioimages/ch2.png');
  startImg=loadImage('bioimages/startimg.PNG');
  ch1=loadImage('bioimages/ch1.2.PNG');
  ch2=loadImage('bioimages/ch2.2.PNG');
  cht2=loadAnimation("bioimages/ch2.1.png","bioimages/ch23.png");
  cht1=loadAnimation("bioimages/ch1.1.png","bioimages/ch10.png");
  EvBg=loadImage('bioimages/EvBg.png');
  EvGj=loadImage('bioimages/EvGj.png');
  Door=loadImage('bioimages/door.jpg');
  CoBg=loadImage('bioimages/CoBg.jpg');
  PrBg=loadImage('bioimages/PrBg.png');
  RoBg=loadImage("bioimages/RoBg.png");
  PeBg=loadImage('bioimages/PeBg.png')
  GameBg=loadImage('bioimages/GameBg.png')
  start1Img=loadImage('bioimages/start.PNG');
  //EvAn=loadImage('bioimages/EvAn.mp4');
  gameTile=loadImage('bioimages/GameTitle.png');
  Cloud=loadImage("bioimages/CoCL.png");
  WD=loadImage("bioimages/CoWaDo.png");
  Gun=loadImage("bioimages/Gun.png");
  laserImg=loadImage("bioimages/Laser.png");
  restartImg=loadImage("bioimages/restart.png");
  Over=loadImage("bioimages/gameover.png");
  knifeImg=loadImage("bioimages/sword.png");
 fruit1=loadImage("bioimages/rain.png");
  fruit2=loadImage("bioimages/sleet.png");
  fruit3=loadImage("bioimages/hail.png");
  fruit4=loadImage("bioimages/snow.png");
  monsterImg=loadAnimation("bioimages/alien1.png","bioimages/alien2.png");
  Done=loadImage("bioimages/done button.png");
  lifeImg=loadImage("bioimages/life .PNG");
  life1Img=loadImage("bioimages/life -1.PNG");
  life2Img=loadImage("bioimages/life -2.PNG");
  //bgImg=loadImage("ninja background.png")
  knifeSound=loadSound("bioimages/knifeSwooshSound.mp3");
  taskS=loadSound("bioimages/Task complete sound effect.mp3");
  bgS=loadSound("bioimages/Bg.mp3");
  LaRo=loadImage("bioimages/LaRo.jpg");
  goal=loadImage("bioimages/goal.png");
  task=loadImage("bioimages/task.png");
  LeSt=loadImage("bioimages/level1Bg.png");
  home1=loadImage("bioimages/home button.png");
  gameTile1=loadImage("bioimages/gameTitle1.png");
  instruction=loadImage("bioimages/instructions.png");
  last=loadImage("bioimages/last.png");
}

function setup() {
  canvas = createCanvas(1330,620);
  engine = Engine.create();
  world = engine.world;
 bg=createSprite(630,50,50,50);
 bg.addImage(gameTile1);
 bg.visible = false;
 playImg=createSprite(displayWidth/2,displayHeight/2+100,50,50);
 playImg.addImage(play);
 //playImg.scale=0.3
  form = new Form();
  Evtask = new EVTask();
  cloud1 = new Group();
  laserGP = new Group();
  iconCh1=createSprite(50,50,50,50);
  iconCh1.addImage(ch1)
  iconCh1.visible=false;
  iconCh2=createSprite(50,50,50,50);
  iconCh2.addImage(ch2)
  iconCh2.visible=false;
  ////character1=createSprite(440,400,50,50);
  //character1.addImage(CH1);
  //character1.visible=false;
  character2=createSprite(850,400,50,50);
  character2.addImage(CH2);
  character2.visible=false;
  chter1=createSprite(50,300,50,50);
  chter1.addAnimation("chararuning",cht1);
  chter1.visible=false;
  chter1.scale=0.5
  chter2=createSprite(50,300,50,50);
  chter2.addAnimation('ch1',cht2);
  chter2.visible=false;
   start=createSprite(590,350,50,50); 
    start.addImage(startImg);
    start.visible=false;
    start1=createSprite(1200,560,50,50); 
    start1.visible=false
    start1.addImage(start1Img);
  playAlone=createSprite(displayWidth/2-250,displayHeight/2-100,50,50);
 // playAlone.addImage(PA);
  playAlone.visible = false;
  playWFrends=createSprite(displayWidth/2+250,displayHeight/2-100,50,50);
  //playWFrends.addImage(PWF);
  playWFrends.visible = false

  Restart1=createSprite(300,345); 
  Restart1.visible=false;
  Restart1.addImage(restartImg);
  home=createSprite(960,345); 
  home.visible=false;
  home.addImage(home1);

  EvDoor=createSprite(650,360,100,100)
  EvDoor.visible=false;
  EvDoor.addImage(Door);
  EvDoor.scale=0.2;
  EVtask=createSprite(600,350);
  EVtask.visible=false;
  EVtask.addImage(task);
  //EVtask.debug=true;
  EVtask.setCollider("rectangle",0,0,150,180);
  EvDone=createSprite(500,520,50,50);
  EvDone.visible=false;
  EvDone.addImage(Done);
  EvDone.scale=0.5;
  EvDone1=createSprite(800,500,50,50);
  EvDone1.visible=false;
  EvDone1.addImage(Done);
  EvDone1.scale=0.5;

  
  CoDoor=createSprite(1240,330,100,100)
  CoDoor.addImage(Door)
  CoDoor.scale=0.3;
  CoDoor.visible=false;
  Cotask=createSprite(600,350);
  Cotask.visible=false;
  Cotask.addImage(task);
  Cotask.setCollider("rectangle",0,0,150,180);
  /*bird = new Bird(630,400);
  slingshot = new SlingShot(bird.body,{x:630, y:400});
  cloud = new Box(random(460,860),300,random(300,100),random(400,50))
  cloud1 = new Box(random(460,860),300,random(300,100),random(300,150))
  cloud2 = new Box(random(460,860),300,random(400,100),random(240,150))
  cloud3 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud4 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud5 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud6 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud7 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud8 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud9 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud10 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud11 = new Box(random(460,860),300,random(400,100),random(240,110))
  cloud12 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud13 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud14 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud15 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud16 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud17 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud18 = new Box(random(460,860),300,random(400,100),random(240,110))
  cloud19 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud20 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud21 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud22 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud23 = new Box(random(460,860),300,random(400,100),random(300,150))
  cloud24 = new Box(random(460,860),300,random(400,100),random(300,110))
  cloud25 = new Box(random(460,860),300,random(400,100),random(240,110))
  random(cloud,cloud11)
  ground = new Ground(500,310,1000000,10)*/
  Bow=createSprite(645,500);
      Bow.addImage(Gun);
      Bow.scale=0.3
      Bow.visible=false;
  CoDone =createSprite(750,480,50,50);
  CoDone.visible =false;

  PrDoor=createSprite(1240,330,100,100)
  PrDoor.addImage(Door)
  PrDoor.scale=0.3;
  PrDoor.visible=false;
  PrDone =createSprite(750,480,50,50);
  PrDone.visible =false;
  Prtask=createSprite(600,350);
  Prtask.visible=false;
  Prtask.addImage(task)
  Prtask.setCollider("rectangle",0,0,150,180);
  life=createSprite(470,230,20,20);
  life.visible=false;
  life1=createSprite(495,230,20,20);
  life1.visible=false;
  life2=createSprite(520,230,20,20);
  life2.visible=false;
  Knife=createSprite(200,200,20,20);
  Knife.addImage(knifeImg); 
  Knife.scale=0.7;
  Knife.visible=false;
  fruitGroup=new Group();
  enemyGroup=new Group();
  life.addImage(lifeImg)
   life1.addImage(life1Img)
   life2.addImage(life2Img)

  RoDoor=createSprite(1240,330,100,100)
  RoDoor.addImage(Door)
  RoDoor.scale=0.3;
  RoDoor.visible=false;
  Rotask=createSprite(600,350);
  Rotask.visible=false;
  Rotask.setCollider("rectangle",0,0,150,180);
  Rotask.addImage(task)
        sofia = createSprite(470, 200,20,20);
        sofia.visible=false;
        sofia.addImage(WD);
        sofia.scale=0.05
       // sofia.debug=true;
        //c//onsole.log(sofia.debug=true)
        sofia.setCollider("circle",0,0,50);
        cup = createSprite(675, 390,10,10);
        cup.addImage(LaRo);
        cup.scale=0.07;
        pad1 = createSprite(650, 450 ,210,10);
        pad2 = createSprite(800, 270 ,10,100);
        pad3 = createSprite(700, 520 ,10,80);
        pad4 = createSprite(600, 520 ,10,80);
        pad5 = createSprite(790, 520 ,100,10);
        pad6 = createSprite(755, 410 ,10,90);
        pad7 = createSprite(470, 400 ,50,10);      
        pad8 = createSprite(750, 260 ,10,70);
        pad9= createSprite(440,375,10,380);
        pad10 = createSprite(535, 250 ,10,50);
        pad11 = createSprite(600, 250 ,10,50);
        pad12 = createSprite(715, 220 ,240,10);        
        pad13 = createSprite(840, 375,10,380);        
        pad14 = createSprite(640, 560 ,395,10);
        pad15 = createSprite(640, 180 ,410,10);      
        pad16 = createSprite(790, 400 ,10,100);
        pad17 = createSprite(810, 400 ,50,10);
        pad18 = createSprite(625, 360 ,180,10);
        pad19 = createSprite(490, 220 ,100,10);      
        pad20 = createSprite(650, 410 ,130,10);
        pad21 = createSprite(490, 500 ,100,10);
        pad22 = createSprite(645, 270 ,100,10);
        pad23 = createSprite(710,385 ,10,50);
        pad24 = createSprite(540, 410 ,10,90);
        pad25 = createSprite(500, 410 ,10,100);        
        pad26 = createSprite(605, 400,40,15);
        pad27 = createSprite(610, 320,100,10);
        pad28 = createSprite(750, 300,100,10);
        pad29 = createSprite(500, 275 ,10,100);
        sofia.visible=false;
        cup.visible=false;
        pad1.visible=false;
        pad2.visible=false;
        pad3.visible=false;
        pad4.visible=false;
        pad5.visible=false;
        pad6.visible=false;
        pad7.visible=false;
        pad8.visible=false;
        pad9.visible=false;
        pad10.visible=false;
        pad11.visible=false;
        pad12.visible=false;
        pad13.visible=false;
        pad14.visible=false;
        pad15.visible=false;
        pad16.visible=false;
        pad17.visible=false;
        pad18.visible=false;
        pad19.visible=false;
        pad20.visible=false;
        pad21.visible=false;
        pad22.visible=false;
        pad23.visible=false;
        pad24.visible=false;
        pad25.visible=false;
        pad26.visible=false;
        pad27.visible=false;
        pad28.visible=false;
        pad29.visible=false;

        PeDoor=createSprite(1240,330,100,100)
        PeDoor.addImage(Door)
        PeDoor.scale=0.3;
        PeDoor.visible=false;
        Petask=createSprite(600,350);
        Petask.visible=false;
        Petask.addImage(task);
        Petask.setCollider("rectangle",0,0,150,180);
        PrDone =createSprite(750,480,50,50);
        PrDone.visible =false;
        boundaries = createSprite(630, 220,400 ,5);
        boundaries1 = createSprite(630, 430,400 ,5);
        boundaries2 = createSprite(630, 330,400 ,5);
        boundaries3 = createSprite(630, 540,400 ,5);
        boundaries4 = createSprite(432, 380,5 ,350);
        boundaries5 = createSprite(830, 380,5 ,350);
        goal1 = createSprite(630, 235,100,20);
        goal1.addImage(goal)
        goal1.scale=0.2;
        goal2 = createSprite(630, 525,100,20);
        goal2.addImage(goal)
        goal2.scale=0.2;
        striker = createSprite(630, 275, 100,1000);
        striker.addImage(WD)
        striker.scale=0.05;
        playerMallet = createSprite(630, 255,50,10);
        computerMallet = createSprite(630, 510,50,10);
        boundaries.shapeColor="white";
        boundaries1.shapeColor="white";
        boundaries2.shapeColor="white";
        boundaries3.shapeColor="white";
        boundaries4.shapeColor="white";
        boundaries5.shapeColor="white";
        boundaries.visible=false;
        boundaries1.visible=false;
        boundaries2.visible=false;
        boundaries3.visible=false;
        boundaries4.visible=false;
        boundaries5.visible=false;
        goal1.visible=false;
        goal2.visible=false;
        striker.visible=false;
        playerMallet.visible=false;
        computerMallet.visible=false;

              
  startLine = new Line(0,70,300,10);
  startLine1 = new Line(0,225,300,10);
  startLine2 = new Line(78,200,10,110);
  startLine3 = new Line(78,95,10,110);
  Evline1 = new Line(500,50,700,10);
  Evline2 = new Line(500,300,700,10);
  Evline3 = new Line(325,87.5,10,160);
  Evline4 = new Line(325,262.5,10,160);
}
 


function draw(){
  background(GameBg);
  bgS.play(); 
   /*play = createButton('play');
   play.position(displayWidth/2,displayHeight/2+100);
   play.style.width = '200px'; // setting the width to 200px
    play.style.height = '200px'; // setting the height to 200px 
    play.style.background = 'teal'; // setting the background color to teal
     play.style.color = 'white'; // setting the color to white
      play.style.fontSize = '20px';
  // play.id='mainButton';
  //play.x=playImg.x;
  //play.y=playImg.y;
  //play.visiable=false;*/
  //playImg.debug = true;
  playImg.setCollider("rectangle",0,0,200,60);
  ///
  /*if(gameState === 0){
    if(character1.visible = true && character2.visible){
    fill("white")
    textSize(30);
    text("Chose your Character",displayWidth/2-170,displayHeight/2-200);
    }*/
  if(mousePressedOver(playImg)&& gameState!=1) {
    playImg.remove();
    ///bg.visible = false;
   // bg.x= 700//
   // bg.y= 100

    gameState = 3;
    //form.start();
    /*this.input = createInput('Entre username');
    this.input.position(650,displayHeight/2);
    save=createSprite(785,490);
    save.addImage(saveImg);
    if(mousePressedOver(save)){        
      
    }*/
   }

/*if(gameState === 1){
  background(gameTile);
      fill("white")
      textSize(30);
      text('choose your character',500,200)
      
      character1.visible=true;
      playImg.remove();
      character2.visible=true;
    form.start();
   /* if(mousePressedOver(character1)) {    
    gameState = 2;
  }
  if(mousePressedOver(character2)) {    
    gameState = 3;
    }*/

/*if(gameState === 2){
  background(gameTile);
  start.visible=true;
  //bg.visible=true;
    if(mousePressedOver(start)) {    
      gameState = 3;
      } 
    //character1.visible=false;
    //character2.hide();

}*/
if(gameState === 3){
  background(gameTile);
  
  start1.visible=true;
  iconCh1.visible=true; 
  image(instruction,450,200,500,400);
  if(mousePressedOver(start1)) {    
    gameState = 4;
    //start1.remove();
    chter1.visible=true; 
    //chter2.remove();
    }
   /* else if(mousePressedOver(start1)&&(character2.visible=true)){
     gameState = 4;
     
    chter2.visible=true;
    chter1.remove(); 
    }*/
   // gameState = 4;
  //character2.visible=false;
}
if(gameState === 4){
background(LeSt);
playImg.remove();
start1.visible=false;
//.visible=false;
bg.visible=true;;
chter1.visible=true; 
iconCh1.visible=false; 
iconCh2.visible=false; 
startLine.display();
startLine1.display();
startLine2.display();
startLine3.display();
Evline1.display();
Evline2.display();
Evline3.display();
Evline4.display();
EvDoor.visible=true;
if(chter1.isTouching(EvDoor)){
  gameState=5;
  chter1.x=50;
  chter1.y=300;
}
}
if(gameState===5){
  EvDoor.visible=false;
  bg.visible=false;
  background(EvBg)
      fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Evaporation',600,50)
playImg.x=2000;
  EVtask.visible=true;
 
if(chter1.isTouching(EVtask) || mousePressedOver(EVtask)){
        gameState=6;    
   }
}
if(gameState===6){
  background(EvBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Evaporation',600,50)
       EVtask.visible=false;
       chter1.visible=false;
        fill("white");
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(640, 320, 500, 500);
       fill('Black')
       textSize(30)
       strokeWeight(0);
       textStyle(BOLD)
       text('TASK 1',610,100)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Goal:',415,150)
       textSize(15)
       text(' To bring the sunlight.',465,150)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Task:',415,170)
       textSize(15)
       text('  you need to make an acrostic poem on “sunlight”.',465,170)
       EvDone.visible=true;
       Evtask.display();       
}
if(gameState===7){
  background(EvBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Evaporation',600,50)
  EvDone.visible=false;
  fill("white");
  stroke("red");
  strokeWeight(4);
  rectMode(CENTER);
  rect(640, 320, 500, 500);
  fill('Black')
  textSize(30)
  strokeWeight(0);
 textStyle(BOLD);
 textAlign(CENTER)
 text('Well Done',625,120);
 //VIDEO(EvGj,625,200);
 /*vid = createVideo('bioimages/EvAn.mp4',625,200);
 //vid.x=625;
 //vid.y=200;
 vid.size(200,200);
 vid.loop();I*/
//image("bioimages/EvAn.mp4",625,200);
// GIFLENS-https://gfycat.com/ifr/ImmediateOrneryIberianmole.gif
// GIFLENS-https://media2.giphy.com/media/SGabYT8MhuJMc/200.gif
//  GIFLENS-'https://media2.giphy.com/media/SGabYT8MhuJMc/200.gif'
// 
// GIFLENS-https://media2.giphy.com/media/SGabYT8MhuJMc/200.gif
//GIFLENS.viewGif(GIFLENS-'https://media2.giphy.com/media/SGabYT8MhuJMc/200.gif')
//image(EvAn,550,200,200,250);
image(EvGj,550,200,200,250);
EvDone1.visible=true;
if(mousePressedOver(EvDone1)){
  EvDone1.visible=false;
  background(EvBg);
  chter1.visible=true;
  gameState=8;
  taskS.play(); 
}
}
if(gameState===8){
  background(EvBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Evaporation',600,50)
  EvDone1.visible=false;
  chter1.visible=true;
CoDoor.visible=true;
if(chter1.isTouching(CoDoor)){
  gameState=9;
  CoDoor.visible=false;
  chter1.x=50;
  chter1.y=300;
}
}
if(gameState===9){
  background(CoBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Condensation',600,50)
  CoDoor.visible=false;
Cotask.visible=true;
if(chter1.isTouching(Cotask) || mousePressedOver(Cotask)){
  gameState=10; 
  Cotask.visible=false;   
}
}
if(gameState===10){
  background(CoBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Condensation',600,50)
  Engine.update(engine);
  Cotask.visible=false;
  chter1.visible=false;
        fill(rgb(179, 191, 188));
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(640, 320, 500, 500);
       fill('Black')
       textSize(30)
       strokeWeight(0);
       textAlign(CENTER);
       textStyle(BOLD)
       text('TASK 2',620,100)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Goal:',420,120)
       textSize(15)
       text('To reach a low temperature.',550,120)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Task:',420,140)
       textSize(15)
       text('  you need to blast the clouds.',550,140)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Hint:',420,160);
       textSize(15)
       text('do not touch the clouds and if the score',590,160);
       text(' goes into negtive points refresh the page',590,180)
       text('Win 15 point and click space shoot.' ,580,200);
      /* bird.display();   
       slingshot.display();    
      cloud.display();
      cloud1.display();
      cloud2.display();
      cloud3.display();
      cloud4.display();
      cloud5.display();
      cloud6.display();
      cloud7.display();
      cloud8.display();
      cloud9.display();
      cloud10.display();
      cloud11.display();
      cloud12.display();
      cloud13.display();
      cloud14.display();
      cloud15.display();
      cloud16.display();
      cloud17.display();
      cloud18.display();
      cloud19.display();
      cloud20.display();
      cloud21.display();
      cloud22.display();
      cloud23.display();
      cloud24.display();
      cloud25.display();*/
      
      //Bow.visible=false;
      Restart=createSprite(645,400);
      Restart.addImage(restartImg);
      Restart.visible=false;
      GameOver=createSprite(645,230);
      GameOver.addImage(Over);
      GameOver.visible=false;

      cloud12();
       Bow.x=mouseX; 
   // Bow.x=height/2
    Bow.y=500;
    Bow.visible=true; 
    if(keyDown(UP_ARROW)||keyDown('space')){
      laser=createSprite(360,100,10,10);
      laser.addImage(laserImg)
      laser.velocityY = -6;
      laser.scale=0.2;
      laser.x=Bow.x
      laser.y=Bow.y;
      laser.lifetime=-200;
      laserGP.add(laser);
         // laser.debug = true;
          laser.setCollider("rectangle",0,0,20,150);
        }
        fill('Black')
        textSize(20)
        strokeWeight(0);
        textStyle(BOLD)
      text("score:"+score,840,190);
        if(laserGP.isTouching(cloud1)){
          cloud1.destroyEach();          
          laser.remove();
          score =score+2;
        }
        if(score>=15){
          gameState=11;
          //Bow.remove();
          Bow.visible=false;
          laserGP.destroyEach();
          cloud1.destroyEach();
          taskS.play(); 
        }
        if(Bow.isTouching(cloud1)){
          score = score - 2;
          count=count+1;
        }
        if(count===1){
          life2.remove();
        }
         if(count===2){
          life1.remove();
        }
         if(count===3){
          life.remove();
        }
        if(count===4){
         score=score-2;
        }

        
  
    
      /*CoDone.visible=true;
      if(mousePressedOver(CoDone)){
        CoDone.remove();
        Bow.remove();
        Bow.visible=false;
        background(EvBg);
        chter1.visible=true;
        gameState=11;
      }*/
      /*if(bird.isTouching(cloud)){
        cloud.remove();
      }
      /*if(bird.isTouching(cloud1)){
        cloud1.remove();
      }
      if(bird.isTouching(cloud2)){
        cloud2.remove();
      }
      if(bird.isTouching(cloud3)){
        cloud3.remove();
      }if(bird.isTouching(cloud4)){
        cloud4.remove();
      }
      if(bird.isTouching(cloud5)){
        cloud5.remove();
      }
      if(bird.isTouching(cloud6)){
        cloud6.remove();
      }
      if(bird.isTouching(cloud7)){
        cloud7.remove();
      }

      if(bird.isTouching(cloud8)){
        cloud8.remove();
        }
      if(bird.isTouching(cloud9)){
        cloud9.remove();
      }
        
      if(bird.isTouching(cloud10)){
        cloud10.remove();
      }
      if(bird.isTouching(cloud11)){
      cloud11.remove();
      }*/
};
if(gameState===11){
  background(CoBg);
  //CoDone.remove();
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Condensation',600,50)
  Bow.visible=false;
  fill('Black')
  textSize(20)
  strokeWeight(0);
  textStyle(BOLD)
  text('Task Completed',420,150);
  
  chter1.visible=true;
  PrDoor.visible=true;
  if(chter1.isTouching(PrDoor)){
    gameState=12;
    PrDoor.visible=false;
    chter1.x=50;
    chter1.y=300;
  }
}
if(gameState===12){
  background(PrBg);
  fill('Black')
       textSize(30)      
       stroke('White')
       strokeWeight(4)
       textStyle(BOLD)
       text('Precipitation',600,50)
  Prtask.visible=true;
  PrDoor.visible=false;
  if(chter1.isTouching(Prtask) || mousePressedOver(Prtask)){
    gameState=13; 
    Prtask.visible=false;   
  }
}
if(gameState===13){
  background(PrBg);  
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Precipitation',600,50)
  Prtask.visible=false;
  chter1.visible=false;
        fill('light Blue');
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(640, 320, 500, 500);
       fill('Black')
       textSize(30)
       strokeWeight(0);
       textAlign(CENTER);
       textStyle(BOLD)
       text('TASK 3',620,100)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Goal:',420,120)
       textSize(15)
       text(' To precipitate the condensed water vapour.',600,120)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Task:',420,140)
       textSize(15)
       text('  you need to slice the images.',550,140)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Hint:',420,160)
       textSize(15)
       text('do not touch the monster and win 15 point. ',600,160)
      // PrDone.visible=true;   
       Knife.visible=true;
       life2.visible=true;
       life.visible=true;
       life1.visible=true;
      Knife.y=mouseY; 
      Knife.x=mouseX;
     
       textSize(20);
       textStyle(BOLDITALIC);
       fill("yellow")
       text("score:"+score1,850,230);
       random(fruitGroup,enemyGroup) ;
      if(fruitGroup.isTouching(Knife)){
        fruitGroup.destroyEach();
        score1=score1+1
       //knifeSound.play(); 
      }
         fruit();
       if(enemyGroup.isTouching(Knife)){
         enemyGroup.destroyEach();
         score1=score1-2;
         count=count+1 
         }
       enemy();
       if(count===1){
         life2.remove();
       }
        if(count===2){
         life1.remove();
       }
        if(count===3){
         life.remove();
       }
       if(count===4){
        score1=score1-2;
       }
       if(score1>=15){
         gameState=14
         taskS.play(); 
        //Knife.addImage(youwin);
        //Knife.x=width/2;
        //Knife.y=height/2; 
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
      fruitGroup.setVelocityYEach(0);
      enemyGroup.setVelocityYEach(0);
        }
      
      /*if(mousePressedOver(PrDone)){
        PrDone.remove();
        background(PrBg);
        chter1.visible=true;
        gameState=14;
      }*/
}
if(gameState===14){
  background(PrBg);
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Precipitation',600,50)
  Knife.visible=false;
  life1.visible=false;
  life2.visible=false
  life.visible=false;
  //PrDone.remove();
  fill('Black')
  textSize(20)
  strokeWeight(0);
  textStyle(BOLD)
  text('Task Completed',420,150);
  
  chter1.visible=true;
  RoDoor.visible=true;
  if(chter1.isTouching(RoDoor)){
    gameState=15;
    RoDoor.visible=false;
    chter1.x=50;
    chter1.y=300;
  }
}
if(gameState===15){
  background(RoBg);
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Runoff',600,50)
  RoDoor.visible=false;
  Rotask.visible=true;
if(chter1.isTouching(Rotask) || mousePressedOver(Rotask)){
  gameState=16; 
  Rotask.visible=false;   
  sofia.x=470
  sofia.y=200
}
}
if(gameState===16){
  background(RoBg);
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Runoff',600,50)
  Rotask.visible=false;
  chter1.visible=false;
        fill('green');
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(640, 320, 500, 500);
       fill('Black')
       textSize(30)
       strokeWeight(0);
       textAlign(CENTER);
       textStyle(BOLD)
       text('TASK 4',620,100)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Goal:',420,120)
       textSize(15)
       text(' To bring all precipitated water back to normal state.',630,120)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Task:',420,140)
       textSize(15)
       text('  You need to finish the maze.',550,140)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Hint:',420,160)
       textSize(15)
       text('Use arrow keys to move and do not touch the boder',630,160)
       sofia.visible=true;
        cup.visible=true;
        pad1.visible=true;
        pad2.visible=true;
        pad3.visible=true;
        pad4.visible=true;
        pad5.visible=true;
        pad6.visible=true;
        pad7.visible=true;
        pad8.visible=true;
        pad9.visible=true;
        pad10.visible=true;
        pad11.visible=true;
        pad12.visible=true;
        pad13.visible=true;
        pad14.visible=true;
        pad15.visible=true;
        pad16.visible=true;
        pad17.visible=true;
        pad18.visible=true;
        pad19.visible=true;
        pad20.visible=true;
        pad21.visible=true;
        pad22.visible=true;
        pad23.visible=true;
        pad24.visible=true;
        pad25.visible=true;
        pad26.visible=true;
        pad27.visible=true;
        pad28.visible=true;
        pad29.visible=true;
        if(keyDown(UP_ARROW)) {
          sofia.velocityX = 0;
          sofia.velocityY = -2;
        }
      if (keyDown(LEFT_ARROW)) {
          sofia.velocityX = -2;
          sofia.velocityY = 0;
        }
        if (keyDown(DOWN_ARROW)) {
          sofia.velocityY = 2;
          sofia.velocityX = 0;
        }
        if (keyDown(RIGHT_ARROW)) {
          sofia.velocityX = 2;
          sofia.velocityY = 0;
         }
         if (sofia.isTouching(pad1)||sofia.isTouching(pad2)||sofia.isTouching(pad3)||sofia.isTouching(pad4)||sofia.isTouching(pad5)||sofia.isTouching(pad6)||sofia.isTouching(pad7)||sofia.isTouching(pad8)||sofia.isTouching(pad9)||sofia.isTouching(pad10)||sofia.isTouching(pad11)||sofia.isTouching(pad12)||sofia.isTouching(pad13)||sofia.isTouching(pad14)||sofia.isTouching(pad15)||sofia.isTouching(pad17)||sofia.isTouching(pad18)||sofia.isTouching(pad19)||sofia.isTouching(pad20)||sofia.isTouching(pad21)||sofia.isTouching(pad22)||sofia.isTouching(pad23)||sofia.isTouching(pad24)||sofia.isTouching(pad25)||sofia.isTouching(pad26)||sofia.isTouching(pad27)||sofia.isTouching(pad28)||sofia.isTouching(pad29)) {
          sofia.x=470
          sofia.y=200
           }
           if (sofia.collide(cup)) {
             gameState=17;
             taskS.play(); 
        sofia.visible=false;
        cup.visible=false;
        pad1.visible=false;
        pad2.visible=false;
        pad3.visible=false;
        pad4.visible=false;
        pad5.visible=false;
        pad6.visible=false;
        pad7.visible=false;
        pad8.visible=false;
        pad9.visible=false;
        pad10.visible=false;
        pad11.visible=false;
        pad12.visible=false;
        pad13.visible=false;
        pad14.visible=false;
        pad15.visible=false;
        pad16.visible=false;
        pad17.visible=false;
        pad18.visible=false;
        pad19.visible=false;
        pad20.visible=false;
        pad21.visible=false;
        pad22.visible=false;
        pad23.visible=false;
        pad24.visible=false;
        pad25.visible=false;
        pad26.visible=false;
        pad27.visible=false;
        pad28.visible=false;
        pad29.visible=false;

           }
}
if(gameState===17){
  background(RoBg)
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Runoff',600,50)
  PeDoor.visible=true;
  fill('Black')
  textSize(20)
  strokeWeight(0);
  textStyle(BOLD)
  text('Task Completed',420,150);
  
  chter1.visible=true;
  PeDoor.visible=true;
  if(chter1.isTouching(PeDoor)){
    gameState=18;
    PeDoor.visible=false;
    chter1.x=50;
    chter1.y=300;
  }
}
if(gameState===18){
  background(PeBg);
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Percolation',600,50)
  PeDoor.visible=false;
  Petask.visible=true;
if(chter1.isTouching(Petask) || mousePressedOver(Petask)){
  gameState=19; 
  Petask.visible=false;   
  striker.x=630;
  striker.y=370;
}
}
if(gameState===19){
  background(PeBg)
  fill('Black')
  textSize(30)      
  stroke('White')
  strokeWeight(4)
  textStyle(BOLD)
  text('Percolation',600,50)
  Petask.visible=false;
  chter1.visible=false;
        fill(rgb(192, 198, 197));
        stroke("red");
        strokeWeight(4);
        rectMode(CENTER);
       rect(640, 320, 500, 500);
       fill('Black')
       textSize(30)
       strokeWeight(0);
       textAlign(CENTER);
       textStyle(BOLD)
       text('TASK 5',620,100)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Goal:',420,120)
       textSize(15)
       text(' To bring some water inside the ground to make ground water.',665,120)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Task:',420,140)
       textSize(15)
       text('  You need to Finish the game.',550,140)
       fill('Black')
       textSize(20)
       strokeWeight(0);
       textStyle(BOLD)
       text('Hint:',420,160)
       textSize(15)
       text('Use arrow keys to move and The top one is the yours and win ',670,160);
       text(' 5 point',485,180);
       boundaries.visible=true;
        boundaries1.visible=true;
        boundaries2.visible=true;
        boundaries3.visible=true;
        boundaries4.visible=true;
        boundaries5.visible=true;
        goal1.visible=true;
        goal2.visible=true;
        striker.visible=true;
        playerMallet.visible=true;
        computerMallet.visible=true;
       fill("yellow");text(computerScore, 460, 400);
fill("yellow"); text(playerScore, 460, 370);
        if(striker.isTouching(goal1)||striker.isTouching(goal2)){
          if(striker.isTouching(goal1)){
              computerScore=computerScore+1;                
          }
            if(striker.isTouching(goal2)){
              playerScore=playerScore+1;          
          }
        }
        //computerMallet.velocityX=7;
        
        if(keyDown("left")){
          playerMallet.x=playerMallet.x-10;
         // computerMallet.velocityX=7;
          //striker.velocityX=-8;
        }
        if(keyDown("right")){
          playerMallet.x=playerMallet.x+10;
          computerMallet.velocityX=-7;
          striker.velocityX=-7;
        striker.velocityY=-8;
        }
        if(keyDown("up")){
         if (playerMallet.y>225){
          x=x+9;
          playerMallet.y=playerMallet.y-10;
           
         }
        }
        if(keyDown("down")){
          if(playerMallet.y<335){
             playerMallet.y=playerMallet.y+10;
          }
        }
        createEdgeSprites(boundaries,boundaries3,boundaries4,boundaries5);
       striker.bounceOff(boundaries,boundaries3,boundaries4,boundaries5);
        striker.bounceOff(computerMallet);
        striker.bounceOff(playerMallet);
        striker.bounceOff(boundaries);
        striker.bounceOff(boundaries3);        
        striker.bounceOff(boundaries4);
        striker.bounceOff(boundaries5);
        
        playerMallet.bounceOff(boundaries4);
        playerMallet.bounceOff(boundaries5);
        
       computerMallet.bounceOff(boundaries5)
       computerMallet.bounceOff(boundaries4)
        
        if(striker.bounceOff(boundaries5)||striker.bounceOff(boundaries3) ){
          striker.velocityX=-7;
        striker.velocityY=-8;
        }
        else if(striker.bounceOff(boundaries4)||striker.bounceOff(boundaries)){
          striker.velocityX=7;
        striker.velocityY=8;
        }
        

       /* striker.velocityX=7;
        striker.velocityY=8;*/
        if(playerScore===5){        
          gameState=20;         
          taskS.play(); 
          }
}
if(gameState===20){
  background(last);
          boundaries.visible=false;
          boundaries1.visible=false;
          boundaries2.visible=false;
          boundaries3.visible=false;
          boundaries4.visible=false;
          boundaries5.visible=false;
          goal1.visible=false;
          goal2.visible=false;
          striker.visible=false;
          playerMallet.visible=false;
          computerMallet.visible=false;
          Restart1.visible=true;
          home.visible=true;
 if(mousePressedOver(Restart1)){
            gameState=4;
            chter1.x=50;
            chter1.y=300;
            if(chter1.isTouching(EvDoor)){
              gameState=9;
              chter1.x=50;
              chter1.y=300;
            }
            home.visible=false;
            Restart1.visible=false;
            playerScore=0;
            score1=0;
            score=0;
            count=0;
            startLine.display();
            startLine1.display();
            startLine2.display();
            startLine3.display();
            Evline1.display();
            Evline2.display();
            Evline3.display();
            Evline4.display();
            Evtask.display(); 
            
          }
          
          if(mousePressedOver(home)){
            home.visible=false;
            Restart1.visible=false;
            playerScore=0;
            score1=0;
            score=0;
            count=0
            gameState=3;
            startLine.display();
            startLine1.display();
            startLine2.display();
            startLine3.display();
            Evline1.display();
            Evline2.display();
            Evline3.display();
            Evline4.display();
            if(chter1.isTouching(EvDoor)){
              gameState=9;
              chter1.x=50;
              chter1.y=300;
            }
          }
}

/*
  
  textSize(50)
  fill("white");
  text("be far from imposters and every level has a safe point",displayWidth/2-550,displayHeight/2-200)
  text("complete all task to go to the next level",displayWidth/2-450,displayHeight/2-100)
  text("to complete the game you need to find the treasure",displayWidth/2-550,displayHeight/2)
  text("click on the start button to start the game",displayWidth/2-450,displayHeight/2+100)
  start=createButton('START');
  start.position(displayWidth/2+450,displayHeight/2+200);
  
  start.mousePressed(()=>{
    gameState = 4;
   start.hide();
  })
}
if(gameState === 4){
  background(map1);
  start.hide();
 /* character1.visible = true;
  character2.visible = true;*/

 // gameState = 5;
/*/}
if(gameState === 5){
  background(map2);
  gameState = 6;
}
if(gameState === 6){
  background(map3);
  gameState = 7;
}
if(gameState === 7){
  background(map4);
}*/
/*chter1.collide(Evline1)
  chter1.collide(Evline2)
  chter1.collide(Evline3)
  chter1.collide(Evline4)
  chter1.collide(start)
  chter1.collide(startLine)
  chter1.collide(startLine1)
  chter1.collide(startLine2)
  chter1.collide(startLine3)*/
if(keyDown("left")){
  chter1.x=chter1.x-10;
  
}
if(keyDown("right")){
  chter1.x=chter1.x+10;
}
if(keyDown("up")){ 
  chter1.y=chter1.y-10;  
}
if(keyDown("down")){  
    chter1.y=chter1.y+10;  
}
if(keyDown("left")){
  chter2.x=chter2.x-10;
  
}
if(keyDown("right")){
  chter2.x=chter2.x+10;
}
if(keyDown("up")){ 
  chter2.y=chter2.y-10;  
}
if(keyDown("down")){  
    chter2.y=chter2.y+10;  
}
/*createEdgeSprites(canvas);
chter1.bounceOff();*/
 /* textSize(20);
  fill("white");
  stroke('black')
  strokeWeight(4)
 / text(mouseX+","+mouseY,mouseX,mouseY); */
  drawSprites();
}



function cloud12(){
  if(frameCount % 80 === 0) {
  cloud=createSprite(random(460,860),210);
  cloud.addImage(Cloud);
  if(score % 4===0){
    cloud.velocityY=6 + score;
  }
  else{
    cloud.velocityY= 6;
  }
    
    cloud.scale=0.2; 
   cloud.lifetime = -50;   
    cloud1.add(cloud);
   // cloud1.debug=true;
}
}

function fruit(){
  if(frameCount % 80===0){
   var fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    var rand=Math.round(random(1,4))
   switch(rand){
     case 1:fruit.addImage(fruit1);
            break;
     case 2:fruit.addImage(fruit2);
            break;
     case 3:fruit.addImage(fruit3);
            break;
     case 4:fruit.addImage(fruit4);
            break;
    default:break;
  }
    position = Math.round(random(1,2));
    if(position==1){
      fruit.x =850;
        
      if(score % 4===0){
        fruit.velocityX=Math.round(random(-7,-20))+score;
      }
      else{
        fruit.velocityX=Math.round(random(-7,-20));
      }
    }
    if(position==2){
      fruit.x =450; 
    if(score % 4===0){
      fruit.velocityX=Math.round(random(20,7))+score;
    } 
      else{
        fruit.velocityX=Math.round(random(20,7))
        }
       }
    fruit.y=Math.round(random(200,550));
    //fruit.velocityX=Math.round(random(20,-20));
    //fruit.setLifetime=100;
    fruitGroup.add(fruit);
}
}
function enemy(){
  if(frameCount % 200===0){
  var  monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImg);
    monster.y=Math.round(random(200,550));
   // monster.velocityX=Math.round(random(-7,-20));
    //monster.setLifetime=50;
    enemyGroup.add(monster);
    position = Math.round(random(1,2));
    if(position==1){
      monster.x =850; 
      if(score % 10===0){      monster.velocityX=Math.round(random(-7,-20))+score;
    }
      else{
        monster.velocityX=Math.round(random(-7,-20)) 
      }
    }
    if(position==2){
      monster.x =450;
      if(score % 10===0){      monster.velocityX=Math.round(random(20,7))+score;
      }
      else{
        monster.velocityX=Math.round(random(20,7))
      }
    }
  }
}  
