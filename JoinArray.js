/**
 * Create a function that takes an array of numbers or letters and returns a string.
 * --> we have JS provided "join()" method that concatenates array elements and we can achieve that
 * --> through 4 different ways:
 * var array = ['Wind', 'Water', 'Fire'];
 *      array.join();      // 'Wind,Water,Fire'
 *      array.join(', ');  // 'Wind, Water, Fire'
 *      array.join(' + '); // 'Wind + Water + Fire'
 *      array.join('');    // 'WindWaterFire'
 */

const nameArray = ["A", "r", "y", "a", "S", "t", "a", "r", "k"];
    
function buildNameFromArray(){
    console.log(nameArray.join(''));
    // return nameArray.join();
    
}
buildNameFromArray(nameArray); //AryaStark

/**
 * Lets think to next level and make the function to print AryaStark as "Arya Stark"
 * we could use splice() method along with the join() method for this as below:
 */
const nameArray1 = ["A", "r", "y", "a", "S", "t", "a", "r", "k"];
    
function buildNameFromArray1(){
    console.log(nameArray1.join(nameArray1.splice(4, 0, ' ')));
    // return nameArray1.join(nameArray1.splice(4, 0, ' '));
    // splice(4, 0, ' ') --> this adds new element (in this case ' ' - space) at 4th index and prints 'Arya Stark'
    
}
buildNameFromArray1(nameArray1); // Arya Stark
