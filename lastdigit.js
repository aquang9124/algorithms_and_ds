var numStr = 'ab2f3';

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

function lastDigit(numStr) {
  var splitStr = numStr.split("");
  var nums = [];
  
  for (var i = 0; i < splitStr.length; i++) {
    if (isInt(splitStr[i])) {
      nums.push(splitStr[i]);
    }
  }
  
  if (nums.length < 2) {
    return false;
  }
  
  return Math.pow(nums[0], nums[1]).toString().split('').pop();
}

console.log(lastDigit(numStr));