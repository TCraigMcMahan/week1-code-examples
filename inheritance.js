function Phone(name) {
    this.name = name;
}

Phone.prototype.print = function() {
    console.log(this.name);
}

// function Phone(name) {
//     this.name = name;
//     return name;
// }

var phone = new Phone('My Galaxy S9');
phone.print();