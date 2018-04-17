const numbers = [1, 2, 3];

const total = numbers
    .map((num) => num * 3) // one-line arrow functions return the statement by default
    .filter(num => num % 2 === 0) // parens optional with one parameter functions
    .reduce((a, b) => {
        return a + b
    });

console.log(total);