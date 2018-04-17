// function Phone(name) {
//     console.log(this);
//     this.name = name;
// }

// const phone = new Phone('iPhone');
// console.log(phone);

// Phone function that returns "this"
function Phone(name) {
    console.log(this);
    this.name = name;
    return this;
}

// We can call the function specifying an object as "this". Think of this as
// the context for the function
// console.log(Phone.call({
//     nsaApplication: 'NSA Washington DC'
// }, 'iPhone'));

// Here, we bind the function to an object so that "this" refers to the object
// the function is bound to. The .bind operation returns a new function
const myPhone = Phone.bind({ nsaApp: 'NSA Washington DC' });
console.log(myPhone('iPhone'));