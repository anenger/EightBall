var answers =  
["It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."]

let word, txt, cnv;

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  background(255, 255, 255);
  fill(0,0,0);
  ellipse(300, 300, 400, 400);
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(300, 300, 175, 50);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
  clear()
  centerCanvas();
  background(255, 255, 255);
  fill(0,0,0);
  ellipse(300, 300, 400, 400);
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(300, 300, 175, 50);
  fill(0,0,0);
  txt = text(word, 300, 300);
}

function mousePressed() {
  drawWord()
}

function drawWord() {
  textAlign(CENTER);
  word = random(answers)
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}