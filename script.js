var matrix = [];
var n = 30;
var m = 30;
var side = 28;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var zombiArr = [];
var alienArr = [];
var createdArr = [];
var nothArr = [];
function setup() {
  for (var y = 0; y <n; y++){
    matrix[y]= [];
  for (var x = 0; x <m; x++){
    matrix[y][x]= random(0,7)
    matrix[y][x] = parseInt(matrix[y][x])


}
}
    console.log(matrix)
   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {
           if (matrix[y][x] == 1) {
               var gr = new Grass(x, y)
               grassArr.push(gr)
           }
           else if (matrix[y][x] == 2) {
               var xt = new Xotaker(x, y)
               xotakerArr.push(xt)
           }
           else if (matrix[y][x] == 3) {
             var gt = new Gishatich(x, y)
             gishatichArr.push(gt)
         }
         else if (matrix[y][x] == 4) {
           var zm = new Zombi(x, y)
           zombiArr.push(zm)
         }
         else if (matrix[y][x] == 6) {
           var nt = new Noth(x, y)
           nothArr.push(nt)
         }
         else if (matrix[y][x] == 5) {
           var al = new Alien(x, y)
           alienArr.push(al)
     }
   }

   frameRate(5);
   createCanvas(n * side, matrix.length * side);
   background('#acacac');
 }
}
 function draw() {
   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {
           if (matrix[y][x] == 1) {
               fill("green");
           }
           else if (matrix[y][x] == 2) {
               fill("yellow");
           }
           else if (matrix[y][x] == 3) {
             fill("red");
         }
           else if (matrix[y][x] == 4) {
           fill("orange");
         }
          else if (matrix[y][x] == 5) {
           fill("blue");
         }
         else if (matrix[y][x] == 6) {
           fill("black");
         }

           else if (matrix[y][x] == 0) {
               fill("#acacac");
           }

           rect(x * side, y * side, side, side)


             text(x + " " + y, x * side + side / 2, y * side + side / 2)
 
       }
   }

   for (var i in grassArr) {
   grassArr[i].mult()
   }


   for (var i in xotakerArr) {
     xotakerArr[i].eat()
     xotakerArr[i].move()
     xotakerArr[i].mult()
     xotakerArr[i].die()
   }
   for (var i in gishatichArr) {
   gishatichArr[i].eat()
   gishatichArr[i].move()
   gishatichArr[i].mult()
   gishatichArr[i].die()
 }


 for (var i in zombiArr) {
   zombiArr[i].eat()
   zombiArr[i].eat1()
   zombiArr[i].move()
   zombiArr[i].mult()
   zombiArr[i].die()
 }

 for (var i in alienArr) {
   alienArr[i].eat()
 //  alienArr[i].eat1()
   alienArr[i].eat2()
   alienArr[i].eat3()
   alienArr[i].move()
   alienArr[i].mult()
   alienArr[i].die()
 }

 for(var i in nothArr){
 nothArr[i].eat()
 nothArr[i].move()
 nothArr[i].die()
 }
 }





