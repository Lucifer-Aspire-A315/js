class Address {
    constructor(city) {
        this.city = city;
    }
}

class Hobby {
    constructor(name) {
        this.name = name;
    }
}

class Person {
    constructor(name, city) {
        this.name = name;
        this.city = new Address(city);
        this.Hobby = [];
    }

    addHobby(name) {
        const hobby = new Hobby(name);
        this.hobbies.push(hobby);
    }
}