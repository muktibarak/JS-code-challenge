/**
 * Create a function that takes two arguments (item, times). 
 * The first argument (item) is the item that needs repeating while 
 * the second argument (times) is the number of times the item is to be repeated. 
 * Return the result in an array.
 * 
 * repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
 * repeat(13, 5) ➞ [13, 13, 13, 13, 13]
 * repeat("7", 2) ➞ ["7", "7"]
 * repeat(0, 0) ➞ []
 */

function repeat(item, times){
    // lets create an empty array 
    const items = [];
    // we need to repeat the same item for given number of times. we can use for loop here.
    for(let i = 0; i < times; i++){
        // here on every loop, we need to push the 'item' into the array 'items' for given number of 'times'
        items.push(item);
    }
    return items;
}

console.log(repeat("blah-blah", 4));
console.log(repeat(23, 5));
console.log(repeat(0, 0));
console.log(repeat(0, 1));

