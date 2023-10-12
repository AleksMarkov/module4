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
// 21
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
//
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter((21{ author }) => author === AUTHOR);
// console.log(topRatedBooks);21
// console.log(booksByAuthor);21
// 21
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => {
//     eyeColor === color;
//     console.log(eyeColor, color);
//   });
// };
// Change code above this line
// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "blue"
//   )
// );
// 23
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(({age}) => age >= minAge && age <= maxAge)
// };
// Change code above this line
// 24
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return (friends = users.filter(({ friends }) =>
//     friends.includes(friendName)
//   ));
// };
// Change code above this line
// console.log(
//   getUsersWithFriend(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     "Briana Decker"
//   )
// );
// 25
// Change code below this line
// const getFriends = (users) => {
//   const friendsAll = users.flatMap((user) => user.friends);
//   console.log(friendsAll);
//   return (friends = friendsAll.filter(
//     (item, index, arr) => arr.indexOf(item) === index
//   ));
// };
// Change code above this line
// console.log(
//   getFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// 26
// Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive === true);
// };
// Change code above this line
// 27
// Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive === false);
// };
// Change code above this line

// console.log(
//   getInactiveUsers([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );
// 28
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle, bookByAuthor);
// 29
// Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find((user) => user.email === email);
// };
// Change code above this line
// 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line
// 31
// Change code below this line
// const isEveryUserActive = (users) => {
//  return users.every((user) => user.isActive === true );
// };
// Change code above this line
// 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
// 33
// Change code below this line
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive === true);
// };
// Change code above this line
// 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime, averagePlayTime);

// 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((prev, player) => {
//   return prev + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// 36
// Change code below this line
// const calculateTotalBalance = users => {
//  return users.reduce((prev, user) => {return prev + user.balance;}, 0)
// };
// Change code above this line
// 37
// Change code below this line
// const getTotalFriendCount = users => {
//  return users.reduce((prev, user) => {return prev + user.friends.length}, 0)
// };
// Change code above this line
// 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates, alphabeticalAuthors);
// 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder, authorsInReversedOrder);
// 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(
//   sortedByAuthorName,
//   sortedByReversedAuthorName,
//   sortedByAscendingRating,
//   sortedByDescentingRating
// );

// 42
// Change code below this line
// const sortByAscendingBalance = users => {
//    return [...users].sort((a, b) => a.balance - b.balance);
// };
// Change code above this line
// 43
// Change code below this line
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// Change code above this line
// 44
// Change code below this line
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// Change code above this line
// console.log(
//   sortByName([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
// 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);
// 46
// Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users]
//       .sort((a, b) => a.friends.length - b.friends.length)
//       .map((user) => user.name);
// };
// Change code above this line
// 47
// Change code below this line
// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((value, index, arr) => arr.indexOf(value) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// Change code above this line
// console.log(
//   getSortedFriends([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: [
//         "Jacklyn Lucas",
//         "Linda Chapman",
//         "Adrian Cross",
//         "Solomon Fokes",
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );
// 48
// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((prev, user) => {
      return prev + user.balance;
    }, 0);
};
// Change code above this line
console.log(
  getTotalBalanceByGender(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male",
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: [
          "Jacklyn Lucas",
          "Linda Chapman",
          "Adrian Cross",
          "Solomon Fokes",
        ],
        isActive: false,
        balance: 1498,
        gender: "male",
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
      },
    ],
    "female"
  )
);
