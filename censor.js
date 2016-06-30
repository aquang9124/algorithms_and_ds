function censor(bleep, text) {
  var splitT = text.split("");
  var exists = false;
  var word = "";
  
  for (var i = 0; i < splitT.length; i++) {
    if (splitT[i] == bleep[i] && i <= bleep.length)
    {
      word += '*';
    }
  }
  
  if (word.length === bleep.length)
  {
    exists = true;
    for (var j = 0; j < splitT.length; j++) {
      if (splitT[j] == bleep[j])
      {
        splitT[j] = '*';
      }
    }
  }
  
  if (exists === false)
  {
    return false;
  }
  
  return splitT.join("");
  
}

// print 1 to 255 recursive
function printRecursive(n) {
  if (n === undefined) {
    n = 1;
  }

  if (n > 255) {
    return n;
  }

  console.log(n);
  return printRecursive(n + 1);
}

printRecursive();