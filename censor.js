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