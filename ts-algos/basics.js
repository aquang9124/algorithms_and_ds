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
