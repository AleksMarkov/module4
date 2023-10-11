// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// orderedItems.forEach(myFunction);

// function myFunction(item) {
//   totalPrice += item;
// };

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach(number => number > value ? filteredNumbers.push(number): true);

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
// firstArray.forEach(firstitem => secondArray.includes(firstitem) ? commonElements.push(firstitem) : true );

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {

//   // Change code above this line
//   return quantity * pricePerItem;
// }

// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};
// Change code above this line

console.log(calculateTotalPrice([12, 85, 37, 4]));

// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
};
console.log(filterArray([1, 2, 3, 4, 5], 3));

// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
};
console.log(getCommonElements([1, 2, 3], [2, 4]));

function changeEven(numbers, value) {
  // Change code below this line
  const newArr = [];
  numbers.forEach((number) => {
    number % 2 === 0 ? newArr.push(number + value) : newArr.push(number);
  });
  return newArr;
  // Change code above this line
}
console.log(changeEven([1, 2, 3, 4, 5], 10));

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);
