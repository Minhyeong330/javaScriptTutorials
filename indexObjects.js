// Reference Types
// 1. Objects
// 2. Array
// 3. Function

// [object = person] with 2 properties [name and age]
let person = {
    name: 'Minhyeong',
    age: 30
};

// Dot Notation - Shorter and concise
person.name = 'John';

// Bracket Notation - can use it as a dynamic way
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);