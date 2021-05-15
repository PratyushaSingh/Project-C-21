var canvas,edges;
var music,sur1,sur2,sur3,sur4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
sur1 = createSprite(100,580,205,30)
sur1.shapeColor="brown"
sur2 = createSprite(305,580,205,30)
sur2.shapeColor="red"
sur3 = createSprite(510,580,205,30)
sur3.shapeColor="orange"
sur4 = createSprite(700,580,205,30)
sur4.shapeColor="yellow"

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,30,30)
    ball.velocityX=4;
    ball.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(ball.isTouching(sur1)&&ball.bounceOff(sur1)){
    ball.shapeColor="brown"
    }
    if(ball.isTouching(sur2)&&ball.bounceOff(sur2)){
        ball.shapeColor="red"
        }
    if(ball.isTouching(sur3)&&ball.bounceOff(sur3)){
            ball.shapeColor="orange"
            }
    if(ball.isTouching(sur4)&&ball.bounceOff(sur4)){
                ball.shapeColor="yellow"
                }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
