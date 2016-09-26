function setup() {
  createCanvas (892,616);
}

function draw() {
    background(0,0,10);
    strokeWeight(0);
  
    //left large square in white
    fill (249, 244,	238);
    quad (0, 308, 308, 0, 616,308, 308,616);
    // right square in white
    quad (616, 136, 755, 0, 892, 136, 755, 272);
    //left small square in red
    fill (162, 0	,13);
    quad (446, 308, 528, 220, 616, 308, 534, 390);
    //right small square in green
    fill (47, 130	,40);
    quad (700, 219, 755, 166, 810, 219, 755, 272);
}