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

// insertion sort
var insertionSort = function(input){
  // your work here
  for (var i = 0; i < input.length; i++) {
    if (input[i + 1] < input[i]) {
      for (var j = i + 1; j > 0; j--) {
        var temp = input[j];
        input[j] = input[j - 1];
        input[j - 1] = temp;
      }
    }
  }

  return input;
}
