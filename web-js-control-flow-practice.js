let arrNumber = [0, 1, 2, 3, 4, 5, 6];

function getRandomItem(arrNumber) {
  let randomIndex = Math.floor(Math.random() * arrNumber.length);
  let item = arrNumber[randomIndex];
  return item;
}

let dayNumber = getRandomItem(arrNumber);

if (dayNumber === 0) {
  console.log("Sunday");
} else if (dayNumber === 1) {
  console.log("Monday");
} else if (dayNumber === 2) {
  console.log("Tuesday");
} else if (dayNumber === 3) {
  console.log("Wednesday");
} else if (dayNumber === 4) {
  console.log("Thurday");
} else if (dayNumber === 5) {
  console.log("Friday");
} else if (dayNumber === 6) {
  console.log("Saturday");
} else {
  console.log("Invalid day number");
}
// console.log(dayNumber);
