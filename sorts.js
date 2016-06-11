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

function genArray() {
    var result = [];
    var randNum;
    for (var i = 0; i < 100; i++) {
        randNum = Math.floor(Math.random() * 1000);
        result.push(randNum);
    }

    return result;
}
var arrayTest = genArray();


// quick sort
// left, mid and pivot
// when left is greater than pivot do nothing
// if left is less than pivot, swap mid with left
// then you increment mid
// base case is when start and end are pointing at same value
function quickSort(arr) {

    function placePivot(start, end) {
        if (start >= end) {
            return;
        }

        var mid = start;
        for (var i = start; i < end; i++) {
            if (arr[i] < arr[end]) {
                swap(arr, mid, i);
                mid += 1;
            }
        }
        swap(arr, end, mid);
        placePivot(start, mid - 1);
        placePivot(mid + 1, end);
    }

    placePivot(0, arr.length - 1);
    return arr;
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return true;
}

console.log(quickSort(arrayTest));