/* 
// Some fun with console.log and event loop
console.log('Hello there'); // 1

setTimeout(() => {
    console.log('Hello now'); // 3
}, 0);

console.log('Hello guys'); // 2
*/

// codewars Hit Count algorithm challenge
function counterEff(hitCount: string) : number[][] {
    let i : number;
    let result : number[][] = [[], [], [], []];

    for (i = 0; i < 4; i++) {
        let digit : number = parseInt(hitCount[i]);

        for (let j : number = 0; j <= digit; j++) {
            result[i].push(j);
        }
    }

    return result;
}