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

let button, word;

function setup() {
  createCanvas(400, 400);
  button = createButton('Ask an 8 ball!');
  button.position(300, 300);
  button.mousePressed(drawWord);
}

function draw() {
  background(220);
  ellipse(200, 200, 200, 200);
  text(word, 200, 200);
}

function drawWord() {
  textAlign(CENTER);
  word = random(answers)
  text(word, 200, 200);
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}