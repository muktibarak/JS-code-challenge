/**
 * Sort drink by the price in ascending order
 * You will be given an array of drinks which each drink begin an object with two properties: 
 * name and price.
 * Create a function that has the drinks array as an arg and return the drinks objects sorted by
 * price in ascending order. 
 * drinks = [
 *  {name: "lemonade", price: 50},
 *  {name: "lime", price: 10}
 *   ] --> should produce the following :
 * sortDrinkByPrice(drinks) ➞ [
 *      {name: "lime", price: 10}, 
 *      {name: "lemonade", price: 50}
 * ]
 * 
 * we have array.sort() provided by JS itself. However, this method if used directly in this case, would produce 
 * wrong result. Its because direct use of "array.sort()" method would convert every element in the array into 
 * string/ASCII value and compares based on the string conversion. So we need to approach this problem with another
 * route which is "through creating compare function":
 * 
 */
const drinks = [
    {name: "water", price: 30},
    {name: "lime soda", price: 40},
    {name: "peach sanp", price : 12},
    {name: "cranberry snap", price: 28}
];

//  lets create a compare function first
function comparePrice(a, b){
    let comparison = 0;
    if(a.price > b.price){
        comparison = 1;
    };
    if(a.price < b.price){
        comparison = -1;
    };
    return comparison;
}


 function sortDrinkByPrice(drinks){
    // use the compare function to sort the drinks []
    console.log('Sorted array', drinks.sort(comparePrice));
    return drinks.sort(comparePrice);

 }
 sortDrinkByPrice(drinks);


