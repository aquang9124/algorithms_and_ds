function genChange(coins) {
    var bucket = {
        penny: 0,
        nickel: 0,
        dime: 0,
        quarter: 0
    };
    
    if (coins % 25 === 0) {
        bucket.quarter = coins/25;
        console.log('You have: ' + bucket.penny + ' pennies, ' + bucket.nickel + ' nickels, ' + bucket.dime + ' dimes, and ' + bucket.quarter + ' quarters');
        return true;
    }
    
    while (coins > 0) {
        if (Math.floor(coins / 25) > 0) {
            var numCoins = coins - (coins % 25);
            bucket.quarter = bucket.quarter + numCoins / 25;
            coins = coins % 25;
        }

        else if (Math.floor(coins / 10) > 0) {
            var numDimes = coins - (coins % 10);
            console.log(numDimes);
            bucket.dime = bucket.dime + numDimes / 10;
            coins = coins % 10;
        }

        else if (Math.floor(coins / 5) > 0) {
            var numNicks = coins - (coins % 5);
            bucket.nickel = bucket.nickel + numNicks / 5;
            coins = coins % 5;
        }

        else {
            bucket.penny = coins;
            coins = 0;
        }
    }
    
    return bucket;
}

console.log(genChange(1534));