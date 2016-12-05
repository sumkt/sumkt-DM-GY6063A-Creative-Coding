var lexicon;

function preload() {
  intro = loadStrings('intro.txt');
}

function setup() {
  createCanvas(500, 500);
  background(113, 35, 41);
  
  
  lexicon = new RiLexicon();
  title();
  var oneString = intro.join(' ');
  var sentences = RiTa.tokenize(oneString);
  textSize(24);
  textAlign(LEFT, TOP);
  
 
  var connect = sentences.join(' ');
  fill(240, 187, 114);
  text(connect, width/2-200, height/2-120, 400, 400);
}  
  
function title() {
  textSize(30);
  textAlign(LEFT, TOP);
  var title="Fantastic Beast Madlips";
  fill(240, 187, 114);
  text(title, 50,40, 400, 400);

}

function mousePressed() {
  noun = lexicon.randomWord("nn");
  verb = lexicon.randomWord("vbd");

  background(208, 184, 140);
  textSize(32);
  textAlign(LEFT, TOP);
  fill(61, 41, 18);
  var title="Fantastic Beast and Where You Find Them" + " " + noun;
  text(title, width/2-200, 40, 400, 400);
  
  var results = "Newt Scamander found a beast in.." +
     noun + "jjr"  +
    " Scotland" + " " + noun+" " +
    ". The Beasts were" + " " + verb + " " +
    "facinating creatures" + "vbg" + " where he put them into his suitcase to protect them." 

  textSize(16);
  text(results, width/2-200, height/2-60, 400, 400);
}