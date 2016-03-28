// This function will take a string and if it is a valid candidate for string
// splitting, it will split the string on every space. An array of strings
// will be returned at the end.
function splitStr(str) {
    arr = [];
    word = "";
    // Early termination if str is empty, a single space, or has a length less than 2.
    if (str === "" || str === " " || str.length < 2) {
        return false;
    }

    for (var i = 0; i < str.length; i++) {
        // Check to see if the current index of the string is a letter or not.
        cap = str[i].toUpperCase();
        // If the uppercased version of str[i] does not match the lowercased version, then it is
        // a letter.
        if (cap.toLowerCase() !== cap){
            word += str[i];
        }
        // Else if the string is an apostrophe and i is not currently 0
        // we will run some more checks
        else if (i !== 0 && i !== str.length - 1) {
            // If i is not the last index of the string we can check to see if the
            // indexes before and after it are letters. If they are then we simply continue.
            cap2 = str[i - 1].toUpperCase();
            cap3 = str[i + 1].toUpperCase();

            // If we hit a space and word is not an empty string then we will push
            // word to the array and then reset word to an empty string
            if (str[i] === " " && word !== "") {
                arr.push(word);
                word = "";
            }
                
            else if (cap2.toLowerCase() !== cap2 && cap3.toLowerCase() !== cap3) {
                continue;
            }

            else if (cap2.toLowerCase() !== cap2 || cap3.toLowerCase() !== cap3) {
                continue;
            }
        }
        // If all other checks fail and word is not an empty string
        // we can push it to the array and reset it to be an empty string.
        else if (word !== "") {
            arr.push(word);
            word = "";
        }
    }
    // Finally we return the array.
    return arr;
}

console.log(splitStr("'This! i's'n't 'a' ?test'"));