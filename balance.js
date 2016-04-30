function balance(arr) {
  if (arr.length < 3) {
    return false;
  }
  var i = 1;
  
  while (i < arr.length) {
    var left = 0;
    var right = 0;
    
    for (var j = 0; j < i; j++) {
      left += arr[j];
    }
    
    for (var k = i + 1; k < arr.length; k++) {
      right += arr[k];
    }
    
    if (left === right) {
      return true;
    }
    
    i++;
  }
  
  return false;
}