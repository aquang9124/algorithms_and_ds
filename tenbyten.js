var a = [];

function tenByTen(arr) {
  var randArr = [],
      i = 10;
  
  while (i > 0) {
    for (var j = 10; j; j--) {
      var randInt = Math.floor(Math.random()*10);
      
      if (randInt >= 5) {
        randArr.push('E');
      }
      else {
        randArr.push('D');
      }
    }
    arr.push(randArr);
    randArr = [];
    i--;
  }
  
  return true;
}

tenByTen(a);
console.log(a);