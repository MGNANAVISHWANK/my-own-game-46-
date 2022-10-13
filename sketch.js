var bird , birdImg;;
var bgImg;
var pipe1 , pipe2;
var pipe
var gameOverImg , gameOver;
var retry , retryImg;;

var notTouching = 1; 
var touching = 0;
var gameState = notTouching;

var score = 0;


function preload(){
    bgImg = loadImage("bg.png");
    pipe1 = loadImage("pipe.png");
    pipe2 = loadImage("pipeFlip.png");
    birdImg = loadImage("vishwanksbird.png");
    gameOverImg = loadImage("gameOver.png");
    retryImg = loadImage("retryboissimvshwnk.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bird = createSprite(200,100,20,20);
    bird.addImage(birdImg);
    bird.scale = 0.04;

}

