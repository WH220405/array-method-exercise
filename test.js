const { removeLastElement, addElementToEnd, removeFirstElement, addElementToBeginning, getArraySection, removeArraySection } = require('./coding-exercise');

// Test cases for removeLastElement
let arr1 = [1, 2, 3];
console.log(removeLastElement(arr1)); // Output: 3
console.log(arr1); // Output: [1, 2]

let arr2 = [];
try {
    console.log(removeLastElement(arr2)); // Throws error: "Array is empty"
} catch (error) {
    console.error(error.message);
}

// Test cases for addElementToEnd
let arr3 = [1, 2, 3];
console.log(addElementToEnd(arr3, 4)); // Output: 4
console.log(arr3); // Output: [1, 2, 3, 4]

// Test cases for removeFirstElement
let arr4 = [1, 2, 3];
console.log(removeFirstElement(arr4)); // Output: 1
console.log(arr4); // Output: [2, 3]

let arr5 = [];
try {
    console.log(removeFirstElement(arr5)); // Throws error: "Array is empty"
} catch (error) {
    console.error(error.message);
}

// Test cases for addElementToBeginning
let arr6 = [1, 2, 3];
console.log(addElementToBeginning(arr6, 0)); // Output: 4
console.log(arr6); // Output: [0, 1, 2, 3]

// Test cases for getArraySection
let arr7 = [1, 2, 3, 4, 5];
console.log(getArraySection(arr7, 2, 4)); // Output: [3, 4]
try {
    console.log(getArraySection(arr7, -1, 3)); // Throws error: "Invalid start or end index"
} catch (error) {
    console.error(error.message);
}

// Test cases for removeArraySection
let arr8 = [1, 2, 3, 4, 5];
console.log(removeArraySection(arr8, 1, 4)); // Output: [2, 3, 4]
console.log(arr8); // Output: [1, 5]
