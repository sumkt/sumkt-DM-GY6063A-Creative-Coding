function setup() {
  createCanvas (618,619);
}

function draw() {
    background(216, 220, 221);

    //left large square in white
    noFill();
    strokeWeight (4);
    stroke(8, 10, 5);
    quad (2, 309, 309, 2, 616, 309, 309, 617); // large black square
    stroke (233, 232, 213);
    strokeWeight (7);
    quad (9, 309, 309, 11, 609, 309, 309, 610)// creamy grey square
    fill(246, 224, 123);
    noStroke();
    triangle(33, 290, 240, 84, 240, 290);// yellow triangle
    fill(12, 6, 6);
    quad(132, 298, 238, 298, 238, 412, 132, 412); // black rectangle
    fill(234, 101, 53);
    triangle( 211, 506, 234, 506, 234, 529); // orange square
    fill(4, 41, 147);
    quad (484, 298, 591, 298, 602, 309, 484, 430); // blue quad
    fill(51, 45, 36);
    quad(240, 86, 248, 86, 241, 529, 233, 529); //vertical long line
    quad(33, 298, 33, 290, 584, 290, 591, 298); // horizontal long line
    quad(476, 191, 484, 191, 484, 430, 476, 430); // right vertical line
    quad (211, 506, 203, 498, 406, 498, 406, 506); //lower horizonal line
    quad (124, 290, 132, 298, 132, 420, 124, 420); // left vertical line
    quad (268, 55, 348, 55, 348, 63, 268, 63); // top horizontal line
}