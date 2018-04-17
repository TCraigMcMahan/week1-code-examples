function tacoGenerator() {
    var food = 'taco';
    console.log(food);
}

tacoGenerator();

// Closure example
function house() {
    var people = 2;

    return {
        print: function() {
            console.log('My house has ' + people + ' people');
        },
        add: function() {
            people = people + 1;
        }
    };
}

var ourHouse = house();
console.log(ourHouse);
ourHouse.add();
ourHouse.add();
ourHouse.print();

var vacationHome = house();
vacationHome.print();