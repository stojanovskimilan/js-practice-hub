const car = {type: 'Fiat', model:"500", color: 'White'};
const person = {
    firstName: "Milan",
    lastName: "Stojanovski",
    id: 1,
    age: 26,
    eyeColor: "green",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

let name = person.fullName();
let age = person['age'];
// let age = person.age;

console.log(name);

person.nationality = 'English';
// delete person.age; removing properties

