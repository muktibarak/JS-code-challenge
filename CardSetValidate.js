/**
 * Validating the set in the game
 * In the game Set, three cards form a set if each of the cards are identical, or completely different
 * for each of the four properties. All three cards must: 
 * 1. Have the same color or different colors, 
 * 2. Have the same number or different numbers, 
 * 3. Have the same shades or different shades,
 * 4. Have the same shape or different shapes,
 * 
 * The four properties are :
 * 1. Colors: red, purple, green,
 * 2. Numbers: 1, 2, 3
 * 3. Shades: empty, lined, or full,
 * 4. Shapes: squiggle, oval, diamond
 * 
 * Here a set is represented by an array containing three cards. Each card is represented by an object of properties
 * and values. Write a function that determines whether three cards constitue a valid set.
 * 
 */
function isSet(cards){
    // create Set() for each properties
    let color = new Set();
    let number = new Set();
    let shade = new Set();
    let shape = new Set();

    // loop through the each properties for each card in the set
    cards.forEach(card =>{
        color.add(card.color);
        number.add(card.number);
        shade.add(card.shade);
        shape.add(card.shape);
    });

    // compare with if else -- having two out of three matches does not fulfill the requirement. It must be three.
    if(color.size == 2 || number.size == 2 || shade.size == 2 || shape.size == 2){
        return false;
    } else {
        return true;
    }
}
console.log(isSet([
    { color: "green", number: 1, shade: "empty", shape: "squiggle" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
    { color: "green", number: 3, shade: "empty", shape: "oval" }
  ]));
console.log(isSet([
    { color: "purple", number: 1, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 1, shade: "full", shape: "oval" }
  ]));
console.log(isSet([
    { color: "purple", number: 3, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 3, shade: "full", shape: "oval" }
  ]));