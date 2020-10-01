var canvas
var hr,min,sec
var hourAngle,minuteAngle,secondAngle


function preload(){
  
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}


function draw(){
  
  background(0);
  hr= hour()
  min = minute()
  sec = second()
  
  hourAngle = map(hr%12,0,12,0,360)
  minuteAngle = map(min,0,60,0,360)
  secondAngle = map(sec, 0,60,0,360)

  translate(windowWidth/2,windowHeight/2)
  rotate(-90)

  stroke("red");
  strokeWeight(7);
  push()
  rotate(secondAngle)
  line(0,0,150,0);
  pop()

  stroke("green");
  strokeWeight(7);
  push()
  rotate(minuteAngle)
  line(0,0,100,0);
  pop()

  stroke("blue");
  strokeWeight(7);
  push()
  rotate(hourAngle)
  line(0,0,75,0);
  pop()


  strokeWeight(10);
  noFill();
  //sec arc
  stroke("red");
  arc(0,0,300,300,0,secondAngle);

  //min arc 
  stroke("green");
  arc(0,0,270,270,0,minuteAngle);

  //hr arc 
  stroke("blue");
  arc(0,0,240,240,0,hourAngle);

}
