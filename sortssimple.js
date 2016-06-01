// bubble sort
var bubbleSort = function(input){
  // your work here
  var sort = true,
      idx = 1;

  while (sort === true) {
    sort = false;
    for (var i = 0; i < input.length - idx; i++) {
      if (input[i] > input[i + 1]) {
        var temp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = temp;
        sort = true;
      }
    }
    idx++;
  }

  return input;
}

// selection sort
var selectionSort = function(input){
  // your work here
  var min = input[0],
      minIdx = 0;

  for (var i = 0; i < input.length; i++) {
    min = input[i];
    for (var j = i; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j];
        minIdx = j;
      }
    }

    if (min === input[i]) {
    	continue;
    }

    var temp = input[i];
    input[i] = min;
    input[minIdx] = temp;
  }

  return input;
}

console.log(selectionSort([4, 3, 8, 1]));