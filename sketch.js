var gameState = 0, playerCount = 0;
var database, form,game,player;
var allPlayers;
var distance = 0;
var players, player1, player2, player3, player4;

function preload()
{
    player1Image = loadImage("images/Player1.png");
    player2Image = loadImage("images/Player2.png");
    player3Image = loadImage("images/Player3.png");
    player4Image = loadImage("images/Player4.png");
    //groundImage = loadImage("images/ground.png");
    trackImage = loadImage("images/Background.jpg");
    spaceRace = loadImage("images/Spceracer.jpg");
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-130);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    if(playerCount === 4)
    {
        game.update(1);
    }

    if(gameState === 1)
    {
        clear();
        game.play();
    }

    

    if(gameState === 2)
    {
        game.end();
    }

  
}


