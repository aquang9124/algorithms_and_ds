// mergesort test
var mergeSort = function(input){
  // your work here
  if (input.length < 2) {
    return input;
  }

  return mergeArrays(mergeSort(input.slice(0, Math.floor(input.length / 2))), mergeSort(input.slice(Math.floor(input.length / 2))));
}

function mergeArrays(arr1, arr2) {
  var result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr2[0] >= arr1[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  while (arr1.length > 0) {
    result.push(arr1.shift());
  }

  while (arr2.length > 0) {
    result.push(arr2.shift());
  }

  return result;
}

console.log(mergeSort([2, 5, 1, 8, 9, 3]));