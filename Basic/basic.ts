class Person {
    fullName: string;
    constructor(firstName: string, lastName:string) {
        this.fullName = firstName + ' ' + lastName;
    }

    getName() {
        return this.fullName;
    }
}

var person = new Person('rajan', 'lamichhane');
document.getElementById("root").innerHTML = person.fullName;