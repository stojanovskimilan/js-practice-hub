function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

console.log("My father is "+ myFather.age+". "+"My mother is ",myMother.age);


console.log('Milan' == 'Milan');
console.log('Milan' === 'Milan');

console.log(5 == '5');
console.log(5 === '5');