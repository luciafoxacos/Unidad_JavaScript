const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const evenNumbers = [];
for (let i = 0; i < number.length; i++) {
    const evenNumber = number[i];
    if (evenNumber % 2 == 0) {
        evenNumbers.push(number[i]);
    }
};
console.log(evenNumbers);
