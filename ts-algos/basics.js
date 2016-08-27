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