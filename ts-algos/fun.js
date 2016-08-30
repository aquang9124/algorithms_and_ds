/*
// Some fun with console.log and event loop
console.log('Hello there'); // 1

setTimeout(() => {
    console.log('Hello now'); // 3
}, 0);

console.log('Hello guys'); // 2
*/
// codewars Hit Count algorithm challenge
function counterEff(hitCount) {
    var i;
    var result = [[], [], [], []];
    for (i = 0; i < 4; i++) {
        var digit = parseInt(hitCount[i]);
        for (var j = 0; j <= digit; j++) {
            result[i].push(j);
        }
    }
    return result;
}
console.log(counterEff("1250"));
