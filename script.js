/* VARIABLES */
let enterButton;
let continueButton;
let b1Button;
let b2Button;
let screen = 0;
let esperanzaImage;
let bgImage;
let busImage;
let coffeeImage;
let characterImage;

function preload () {
  bgImage = loadImage("cafe.jpg");
  busImage = loadImage("bus2.jpg");
  coffeeImage = loadImage ("physics.jpg");
 
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Buttons
  enterButton = new Sprite(-200, -200);
  continueButton = new Sprite(-200, -200);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-200, -200);

  showScreen0(); // Start at screen 0

}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen === 0 && enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen === 1 && continueButton.mouse.presses()) {
    showScreen2();
    screen = 2;
  }
  if (screen === 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print("Current screen:", screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
  function showScreen0() {
    image(bgImage, 0, 0, width, height);
    imageMode(CENTER);

    //box
    let titleBoxWidth = 300;
    let titleBoxHeight = 60;

    let titleBoxY = height / 2 - 145;
    let titleBoxX = width / 2 - titleBoxWidth / 2;

    fill(255, 255, 255, 200);
    rect (titleBoxX, titleBoxY, titleBoxWidth, titleBoxHeight, 20);

    textSize(50); // bigger text
    textStyle(BOLD); // bold text
    fill("black");
    text("Esperanza", width / 2, height / 2 - 100);

  // Show enter button
  let enterX = width / 2;
    let enterY = height / 2 + 100;
    let enterW = 100;
    let enterH = 50;
    //background button
    fill(255, 255, 255, 200);
    rect(enterX - enterW / 2, enterY - enterH / 2, enterW, enterH, 12);
    enterButton.pos = {x: enterX, y: enterY };
    enterButton.w = enterW;
    enterButton.h = enterH;
    enterButton.collider = "k";
    enterButton.color = color(0,0);
    fill("black");
    textSize(20);
    text("Enter", enterX, enterY + 7);

  // Move buttons off of screen
  continueButton.pos = b1Button.pos = b2Button.pos = {x: -200, y: -200 };
}

function showScreen1() {
  //text
  background(255);
  imageMode(CORNER);
  image(coffeeImage, 0, 0, width, height);
  
  
  textStyle(NORMAL);
 
  let textBoxWidth = 420;
  let textBoxHeight = 160;
  let textBoxX = width / 2 - textBoxWidth / 2;
  let textBoxY = height / 2 - 160;
  //rectangle filling
  fill (255, 255, 255, 220);
  rect(textBoxX, textBoxY, textBoxWidth, textBoxHeight, 20);
  //text
   fill("black");
  textSize(20);
  text("You've lived in California all your life with your parents who run a family resturant tying back to their home country in South America.They want you to continue the family business but little do they know, you dream of being an engineer.",
       textBoxX + 10, textBoxY + 10, textBoxWidth - 20, textBoxHeight);

  // Hide enter button
  enterButton.pos = { x: -200, y: -200 };

  // Show Continue button
  continueButton.pos = {x: width / 2, y: height / 2 + 100};
  continueButton.w = 120;
  continueButton.h = 50;
  continueButton.collider = "k";
  continueButton.color = color(240,242, 245);
  continueButton.text = "Continue";

  // Move buttons off screen
  b1Button.pos = b2Button.pos = { x: -200, y: -200 };
}

function showScreen2() {
  imageMode(CORNER);
  image(busImage, 0, 0, width, height);

  let textBoxWidth = 420;
  let textBoxHeight = 100;
  let textBoxX = width / 2 - textBoxWidth / 2;
  let textBoxY = height / 2 - 160;
  //rectangle filling
  fill (255, 255, 255, 220);
  rect(textBoxX, textBoxY, textBoxWidth, textBoxHeight + 30, 20);
  //text
   fill("black");
  textSize(20);

  text("Summer ends as quickly as it started and junior year begins. You have the choice to select one class to fill in your empty spot.",
textBoxX + 10, textBoxY + 10, textBoxWidth - 20, textBoxHeight + 30);


  // Move button off screen
  continueButton.pos = {x: -200, y: -200};
  //buttons setting
  let buttonWidth = 220;
  let buttonHeight = 60;
  let buttonY = height / 2 + 100;

  //b1button background
  let b1X = width / 2 -130;
  let b2X = width / 2 + 130;
  fill(225, 225, 225, 220);
  rect(b1X - buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight, 12);
  rect(b2X - buttonWidth / 2, buttonY - buttonHeight / 2, buttonWidth, buttonHeight, 12);
  //setup
  b1Button.pos = {x: b1X, y: buttonY };
  b1Button.w = buttonWidth;
  b1Button.h = buttonHeight;
  b1Button.collider = "k";
  b1Button.color = color(0, 0);

  //B2
  b2Button.pos = {x: b2X, y: buttonY };
  b2Button.w = buttonWidth;
  b2Button.h = buttonHeight;
  b2Button.collider = "k";
  b2Button.color =color(0, 0);

  //button text
  fill("black");
  textSize(14);
  text("Intro to Electrical Engineering", b1X, buttonY + 5);
  text("Ap Physics", b2X, buttonY + 5);
}

function showScreen3() {
  background("lavender");
  //box setting
  let textBoxWidth = 420;
  let textBoxHeight = 100;
  let textBoxX = width / 2 - textBoxWidth / 2;
  let textBoxY = height / 2 - 100;
  //fill in
  fill(255,255,255,220);
  rect(textBoxX, textBoxY, textBoxWidth, textBoxHeight + 40, 20);

  textSize(20);
  fill("black");
  text("Whoops! Looks like the teacher doesn't know how to teach the subject well. You felt like the class was a waste of time and you learned nothing new.",
    textBoxX + 10, textBoxY + 10, textBoxWidth - 20, textBoxHeight + 30);

  // Move buttons off screen
  b1Button.pos = b2Button.pos = {x: -200, y: -200};
}

function showScreen4() {
  background("plum");
  //boxs setting
  let textBoxWidth = 420;
  let textBoxHeight = 100;
  let textBoxX = width / 2 - textBoxWidth / 2;
  let textBoxY = height / 2 - 100;
  //fill in
  fill(255,255,255,220);
  rect(textBoxX, textBoxY, textBoxWidth, textBoxHeight + 40, 20);

  textSize(20);
  fill("black");
  text("Right on! Though you struggled to grasp the topics, you pushed forward. Your teacher notices your improvement and asks if you would like to join the physics competition.",
        textBoxX + 10, textBoxY + 10, textBoxWidth - 20, textBoxHeight + 30);

  // Move buttons off screen
  b1Button.pos = b2Button.pos = { x: -200, y: -200 };
}

function showScreen5() {
  background("lightgreen");
  textSize(20);
  fill("black");
  text("You hit an end point at Screen 5.",
       width / 2, height / 2 - 100);

  // Move buttons off screen
  continueButton.pos = b1Button.pos = b2Button.pos = {x: -200, y: -200};
}
