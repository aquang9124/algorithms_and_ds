// This function actually does not work properly. T-T
function generatePasswords(pass) {
    var results = [];
    var permutations = {};
    // convert passwords into lists
    var arrPass = pass.split('');
    // traverse the list and add all permutations that are not already in
    // our object into results
    for (var i = 0; i < arrPass.length; i++) {
        var tmp = arrPass.slice();
        tmp[i] = tmp[i].toUpperCase() === tmp[i] ? tmp[i].toLowerCase() : tmp[i].toUpperCase();
        var testPass = tmp.join('');
        if (!permutations.hasOwnProperty(testPass)) {
            results.push(testPass);
        }
        permutations[testPass] = true;
    }
    return results;
}
// calculate profits over time
function calcProfits(gain, loss, time) {
    var sum = 0;
    var i;
    for (i = 0; i < time; i++) {
        sum += (gain - loss);
    }
    return sum;
}
// print 1 to a number N
function print1ToN(n) {
    for (var i = 1; i < n; i++) {
        console.log(i);
    }
}
// recursively print 1 to N
function rPrinter(n, i) {
    if (i === void 0) { i = 0; }
    if (i === n) {
        return;
    }
    console.log(i);
    rPrinter(n, i + 1);
}
// remove all negatives from array
function removeNegatives(arr) {
    var numNegs = 0;
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i - numNegs] = arr[i];
        }
        else {
            numNegs++;
        }
    }
    arr.length -= numNegs;
    return arr;
}
function printPerson(person) {
    var result = "";
    person.hobbies.forEach(function (hobby, i) {
        result += hobby;
        if (hobby !== person.hobbies[person.hobbies.length - 1]) {
            result += ", ";
        }
        else {
            result += ".";
        }
    });
    console.log(person.name + " is " + person.age + " years old and likes " + result);
}
var myPerson = {
    name: "Alex",
    age: 24,
    hobbies: ["programming", "eating", "playing games"]
};
