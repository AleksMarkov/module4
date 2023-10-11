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
// const calculateTotalPrice = (orderedItems) => {
// let totalPrice = 0;
//
// orderedItems.forEach((item) => (totalPrice += item));
//
// return totalPrice;
// };
// Change code above this line
//
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//
// Change code below this line
// const filterArray = (numbers, value) => {
// const filteredNumbers = [];
//
// numbers.forEach((number) => {
// if (number > value) {
// filteredNumbers.push(number);
// }
// });
//
// Change code above this line
// return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
//
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
// const commonElements = [];
//
// firstArray.forEach((element) => {
// if (secondArray.includes(element)) {
// commonElements.push(element);
// }
// });

// Change code above this line
// return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function changeEven(numbers, value) {
// Change code below this line
// const newArr = [];
// numbers.forEach((number) => {
// number % 2 === 0 ? newArr.push(number + value) : newArr.push(number);
// });
// return newArr;
// Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
//
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
//
// console.log(planetsLengths);

//15
// const books = [
// {
// title: "The Last Kingdom",
// author: "Bernard Cornwell",
// rating: 8.38,
// },
// {
// title: "Beside Still Waters",
// author: "Robert Sheckley",
// rating: 8.51,
// },
// {
// title: "The Dream of a Ridiculous Man",
// author: "Fyodor Dostoevsky",
// rating: 7.75,
// },
// { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const titles = books.map((book) => book.title);
// console.log(titles);
//

//16
// const books = [
// {
// title: "The Last Kingdom",
// author: "Bernard Cornwell",
// genres: ["adventure", "history"],
// },
// {
// title: "Beside Still Waters",
// author: "Robert Sheckley",
// genres: ["fiction"],
// },
// {
// title: "Redder Than Blood",
// author: "Tanith Lee",
// genres: ["horror", "mysticism"],
// },
// ];
// Change code below this line

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// 17

// Change code below this line
// const getUserNames = (users) => {
// return (names = users.map((user) => user.name));
// };
// Change code above this line
// console.log(
// getUserNames([
// {
// name: "Moore Hensley",
// email: "moorehensley@indexia.com",
// eyeColor: "blue",
// friends: ["Sharron Pace"],
// isActive: false,
// balance: 2811,
// skills: ["ipsum", "lorem"],
// gender: "male",
// age: 37,
// },
// {
// name: "Sharlene Bush",
// email: "sharlenebush@tubesys.com",
// eyeColor: "blue",
// friends: ["Briana Decker", "Sharron Pace"],
// isActive: true,
// balance: 3821,
// skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// gender: "female",
// age: 34,
// },
// {
// name: "Ross Vazquez",
// email: "rossvazquez@xinware.com",
// eyeColor: "green",
// friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// isActive: false,
// balance: 3793,
// skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// gender: "male",
// age: 24,
// },
// {
// name: "Elma Head",
// email: "elmahead@omatom.com",
// eyeColor: "green",
// friends: ["Goldie Gentry", "Aisha Tran"],
// isActive: true,
// balance: 2278,
// skills: ["adipisicing", "irure", "velit"],
// gender: "female",
// age: 21,
// },
// {
// name: "Carey Barr",
// email: "careybarr@nurali.com",
// eyeColor: "blue",
// friends: ["Jordan Sampson", "Eddie Strong"],
// isActive: true,
// balance: 3951,
// skills: ["ex", "culpa", "nostrud"],
// gender: "male",
// age: 27,
// },
// {
// name: "Blackburn Dotson",
// email: "blackburndotson@furnigeer.com",
// eyeColor: "brown",
// friends: ["Jacklyn Lucas", "Linda Chapman"],
// isActive: false,
// balance: 1498,
// skills: ["non", "amet", "ipsum"],
// gender: "male",
// age: 38,
// },
// {
// name: "Sheree Anthony",
// email: "shereeanthony@kog.com",
// eyeColor: "brown",
// friends: ["Goldie Gentry", "Briana Decker"],
// isActive: true,
// balance: 2764,
// skills: ["lorem", "veniam", "culpa"],
// gender: "female",
// age: 39,
// },
// ])
// );
//
// 18
// Change code below this line
// const getUserEmails = (users) => {
// return (emails = users.map((user) => user.email));
// };
// Change code above this line

// 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
// 20
// const books = [
// {
// title: "The Last Kingdom",
// author: "Bernard Cornwell",
// genres: ["adventure", "history"],
// },
// {
// title: "Beside Still Waters",
// author: "Robert Sheckley",
// genres: ["fiction", "mysticism"],
// },
// {
// title: "Redder Than Blood",
// author: "Tanith Lee",
// genres: ["horror", "mysticism", "adventure"],
// },
// ];
// Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
// (ganre, index, array) => array.indexOf(ganre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);
