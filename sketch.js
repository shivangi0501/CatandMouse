var canvas,bg;
var together;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    mouseImg1=loadAnimation("images/jerryOne.png");
    mouseImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}