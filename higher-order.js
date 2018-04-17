// Standard add function
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

// Curried add function
function add(a) {
    return function(b) {
        return a + b;
    };
}

// console.log(add(1)(2));
// console.log(add);
// console.log(add(1));
// console.log(add(1)(2));

// This higher-order function accepts a prefix, then returns a function
// that allows values to be passed. An object with "values" and a function
// is the final result after two function calls
function functionGenerator(prefix) {
    return function(values) {
        const obj = {
            values: values
        };
        obj[prefix + 'ListValues'] = function() {
            values.forEach(function(value) {
                console.log(value);
            });
        }
        return obj;
    }
}

// const myModule = functionGenerator('brian');
// console.log(myModule);
// const myValues = myModule(['backpack', 'hat', 'water bottle']);
// myValues.brianListValues();

// Example currying for a HTML template
function page(title) {
    return function(body) {
        return '<h1>' + title + '</h1>\n' + body;
    }
}

console.log(page('Homepage')('<p>Welcome to my site</p>'));

// <h1>A page title</h1>
// .....