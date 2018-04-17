class Phone {
    // An example static function that acts as a factory for objects
    static phoneFactory(name) {
        if (name === 'iPhone') {
            throw new Error('We are not Apple');
        }
        return new Phone(name);
    }

    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

console.log(Phone.phoneFactory('iPhone'));
const phone = new Phone('My Galaxy S9');
// console.log(phone);
// phone.print();