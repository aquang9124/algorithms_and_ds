function findLongest(str) {
  var words = str.split(" ");
  var longest = words[0];
  
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  
  return longest;
}

var bearStr = "Bears like to hibernate for winter."
console.log('The longest word is: ' + findLongest(bearStr));