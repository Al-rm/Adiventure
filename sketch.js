  //GLOBAL VAR
  var player1
  var keys = {
    mov: ['w', 'a', 's', 'd'],
    act: ['q', 'e', ' '],
    opt: ['Escape', 'Control']
  }
  //preload assets
function preload() {

}
  //setup canvas
function setup() {
  screenRes = [windowWidth,windowHeight];
  canvas = createCanvas(screenRes[0],screenRes[1]);
  player1 = new Player(100,100)
  background(33);

}
  //eventListeners
// function mouseDragged() {
//   
//}
function mousePressed() {

}
function keyPressed() {
  // console.log(event)
  if (event === undefined) {
    return false
  }
  if (keys.mov.includes(key)) {
    player1.inputListener(event)
  }
  if (key == 'Escape'){
    console.log(player1)
  }
  if (key == 'Control') {
    
  }
}

function keyReleased() {
  if (event === undefined) {
    return false
  } else if (keys.mov.includes(key)) {
    player1.keyReleased(event)
  } 
}

//RENDER GAME
function draw() {
  background(33)
  keyPressed()
  keyReleased()
  player1.show()
  player1.update()

}
