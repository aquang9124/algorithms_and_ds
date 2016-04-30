function reverseStr(str) {
  var reverse = "";
  
  for (var i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  
  return reverse;
}

var bearStr = 'bears in bear racecar land';

function lPalindrome(str) {
  var splitStr = str.split(" ");
  var palindromes = [];
  var largest;
  
  for (var i = 0; i < splitStr.length; i++) {
    var revStr = reverseStr(splitStr[i]);
    if (splitStr[i] === revStr)
    {
      palindromes.push(splitStr[i]);
    }
  }
  
  if (palindromes.length > 0)
  {
    largest = palindromes[0];
  }
  
  for (var j = 1; j < palindromes.length; j++) {
    if (palindromes[i].length > largest.length)
    {
      largest = palindromes[i];
    }
  }
  
  return largest;
}