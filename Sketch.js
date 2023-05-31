function setup() {
  createCanvas(560, 600);
  background("antiquewhite")
  //textAlign(LEFT);
  //drawWords(width * 0.25)
  
}

function draw() {
  console.log( mouseX + ',' + mouseY, width, height);
  
  //ladrillosfondo
  rect(0,255, 560, 20)
  rect(210, 20, 560, 30)
  rect(70, 390, 560, 5)
  
   //círculos fondo
  fill("ivory")
  beginShape()
  vertex(126, 223) 
  vertex(230, 100)
  vertex(800, 300)
  vertex(400, 900)
  vertex(126, 223) 
  endShape()
  fill("crimson")
  circle(80, 80, 300)
  fill("teal")
  circle(50, 250, 20)
  line(460, 490, 460, 520)
  line(440, 505, 480, 505)
  line(510, 550, 425, 470)
  point(240, 15) //punto derecha círculo
  fill("crimson")
  rect(0, 500, 160, 50)
  fill("teal")
  rect(0, 550, 90, 50)
  fill("darkslateblue")
  curve(0, 480, 290, 470, 430, 342, 560, 230)
  bezier(0, 330, 470, 300, 400, 290, 560, 100)
  circle(425, 300, 40)
  circle(370, 350, 10)
  noFill()
  bezier(120, 440, 190, 460, 210, 540, 190, 600)
  bezier(230, 500, 215, 490, 200, 510, 198, 554)
  
  //circulos fondo sobre otros círculos
  fill("gold")
  circle(260, 500, 60)
  circle(320, 550, 40)
  circle(390, 500, 10)
  
  //cara pibardo
  fill("snow")
  beginShape()
  vertex(239,236)
  vertex(239, 215)
  vertex(250, 210)
  vertex(260, 206)
  vertex(270, 210)
  vertex(270, 245)
  endShape()
  line (239, 217, 239, 235)
  
  //cabello de gil
  fill("crimson")
  circle(274, 179, 30)
  circle(235, 186, 10)
  fill("teal")
  quad(266, 189, 271, 218, 293, 210, 276, 176)
  fill("gold")
  triangle(282, 199, 301, 218, 308, 199)
  triangle(260, 213, 265, 205, 257, 202)
  triangle(226, 212, 244, 186, 262, 202)
  fill("mediumslateblue")
  circle(262,191, 20)
  fill("gold")
  triangle(233, 195, 239, 160, 270, 170)
  triangle(289, 188, 302, 165, 313, 180)
  fill("gold")
  triangle(221, 190, 231, 201, 242, 193)
  fill("mediumslateblue")
  circle(211, 203, 10)
  circle(298, 194, 15)
  fill("gold")
  triangle(301, 190, 321, 191, 319, 210)
  
  //cuello pibardo
  fill("snow")
  quad(267, 258, 282, 259, 285, 268, 263, 269)
  
  //cara pibardo
  fill("snow")
  bezier(239, 235, 230, 243, 255, 266, 302, 254)
  bezier (302, 254, 307, 242, 310, 225, 302, 217)
  
    //brazos de gil
  beginShape()
  vertex(262,267)
  vertex(198, 267)
  vertex(200, 274)
  vertex(258, 273)
  endShape();
  
  beginShape()
  vertex(302, 267)
  vertex(356, 267)
  vertex(354, 274)
  vertex(296, 273)
  endShape()
  
  //manos de gil
  circle(190, 271, 20)
  circle(364, 271, 20)
  
  //camisa de gil brazos
  fill("palegreen")
  beginShape();
  vertex (325, 266);
  vertex (227, 265);
  vertex (234, 282);
  vertex (321, 282);
  vertex (325, 266);
  endShape ();

  //camisa de gil torso
  beginShape();
  vertex(254, 282)
  vertex(246, 314)
  vertex(306, 314)
  vertex(296, 282)
  endShape ();
  
    //piernas de gil
  fill("snow")
  beginShape();
  vertex(252, 314)
  vertex(230,362)
  vertex(251, 363)
  vertex(262, 314)
  endShape();
  beginShape()
  vertex(299, 314)
  vertex(322,362)
  vertex(301,363)
  vertex(289, 314)
  endShape()
  
  //zapatos de gil
  fill("brown")
  ellipse(236, 367, 40, 10)
  ellipse(318, 367, 40, 10)
  
  //pantalones de gil
  fill("indianred")
  beginShape();
  vertex(250, 314)
  vertex(235, 344)
  vertex(270, 344)
  vertex(272, 330)
  vertex(280, 330)
  vertex(285, 344)
  vertex(320, 344)
  vertex(300, 314)
  endShape();
  
  //ojos pibrrd
  fill("white")
  bezier(285, 220, 282, 224, 279, 233, 285, 238)
  bezier(285, 220, 293, 226, 296, 232, 285, 238)
  fill("gold")
  circle(286, 228, 5)
  strokeWeight(2)
  point(256, 228)
  
  //mouse
 if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255, 200);
    } else if (mouseButton == RIGHT) {
      stroke(255,0,0,230);
      }
   strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
   
    }
} 
