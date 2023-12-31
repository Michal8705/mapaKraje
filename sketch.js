var test1 = 0
var test2 = 0
var test3 = 0
var licznik = 100
var licznik2 = 300
var licznikAdd = 100
var mouseXTmp = 0
var mouseYTmp = 0
var wW = 0;
var wH = 0;
var numberOfTilesX = 0;
var numberOfTilesY = 0;
var tilesInXLine = 60;
var mouseChangeX = 0
var mouseChangeY = 0
var mouseX2 = 0
var mouseY2 = 0
var mouseClick = 0
var firstTileX = 1
var firstTileY = 100
var tileToPreload = 101
var preloadCounter = 0
var choiceSter1 = 0
var graphic;


for (var a = 1; a < 61; a++) {
   var actualTile = 1000+a
   eval('var tilea'+actualTile+';');
 }
 




function mouseClicked(){
  // mouseX2 = mouseX 
  // mouseClick = 1
}


function mousePressed() {
//   if (mouseClick == 0){
// //    mouseChangeX = abs(mouseChangeX+(mouseX2 - mouseX))
//   }
//   mouseX2 = mouseX;
 }
 
 function mouseReleased() {
  choiceSter1 = 1; 
 }

function preload() {
  

}

function setup() {
  graphic = createGraphics(300, 300) 
  graphic.background(220);
  for (var a = 1; a < 61; a++) {
    var actualTile = 1000+a 
    eval('tilea'+actualTile+' = loadImage("'+actualTile+'.JPG");');
  } 
}

function draw() {
  wW = document.documentElement.clientWidth;
  wH = document.documentElement.clientHeight; 
 createCanvas(wW, wH);
 background(100,100,100,100)
  var actualWidth = 0
  var actualHeight = 0

  if (mouseIsPressed === true) {
   mouseChangeX = mouseChangeX-(mouseX-mouseX2)
   mouseChangeY = max(0,min(15000,mouseChangeY-(mouseY-mouseY2)))
  }
  if (mouseChangeX < 0){
    mouseChangeX = 29904+mouseChangeX
  }
  if (mouseChangeX > 29904){
    mouseChangeX = mouseChangeX-29904
  }
 
  numberOfTilesX = Math.floor(wW/500)+1
  numberOfTilesX = 1
  numberOfTilesY = (Math.floor(wH/500)+1)*licznikAdd
  numberOfTilesY = 5900
  mouseX2 = mouseX
  mouseY2 = mouseY

  image(graphic,0,0);


//graphic.loadPixels();

  if (choiceSter1 == 1 ){
    for (var x = firstTileX; x < firstTileX+numberOfTilesX; x = x + 1) {

      var actualTileX = x
      if (actualTileX > 60){
        actualTileX = actualTileX-60
      }
      actualHeight = 0

      for (var y = firstTileY; y < firstTileY+numberOfTilesY+licznikAdd; y = y + licznikAdd) {

        var actualTileY = y
        if (actualTileY > 6000){
          actualTileY = 6000
        }

        if (1 == 1){
          test2 = actualHeight
        }

//      var actualTile = 101
        var actualTile = x+y
        eval('tilea'+actualTile+'.loadPixels();');

        eval('image(tilea'+actualTile+','+actualWidth+','+actualHeight+');');


        if (actualTileY == 6000){
          actualHeight = actualHeight+404
        }else{
          actualHeight = actualHeight+500 
        }
    
      } 

      if (actualTileX == 60){
        actualWidth = actualWidth+404
      }else{
         actualWidth = actualWidth+500 
      }    

    }
  }

  test1 = 1

//test()
  // if (tilea2101 === undefined){
  //  test1 = 1
  // }
  textSize(30);
  stroke(255,0,0,255)
  text(test1,100,100)
  text(test2,100,120)
  text(test3,100,140)

//   if (test1 == 300){
//     for (var a = licznik; a < licznik2; a = a + licznikAdd) {
//       for (var b = 1; b < 61; b++) {
//        var actualTile = a + b 
// //       eval('delete tilea'+actualTile+';');
//        eval('tilea'+actualTile+';');
//       } 
//      }
// //   noLoop()
//   }
choiceSter1 = 0
  // if (licznik2 < 6100){
  //  licznik = licznik+licznikAdd
  //  licznik2 = licznik2+licznikAdd
  //  preload()
  // }
}