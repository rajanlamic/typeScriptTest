var Person = (function () {
    function Person(firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
    Person.prototype.getName = function () {
        return this.fullName;
    };
    return Person;
}());
var person = new Person('rajan', 'lamichhane');
document.getElementById("root").innerHTML = person.fullName;
