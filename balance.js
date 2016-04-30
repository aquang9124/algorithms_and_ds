function balanceOld(arr) {
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

// New balance point algorithm that is better than the old one
function balance(arr) {
  if (arr.length < 3) {
    return false;
  }
  
  var midIdx = Math.floor(arr.length/2),
      left = 0,
      right = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (i < midIdx)
    {
      left += arr[i];
    }
    else if (i > midIdx) {
      right += arr[i];
    }
  }
  
  if (left == right) {
    return true;
  }
  
  return false;
}

console.log(balance([1, 2, 3, 4, 1, 2, 3]));