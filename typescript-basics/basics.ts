//Primitive: Strings, Numbers, Booleans
// types declared should be lowercase -  Uppercase is declaring the object

let age: number = 28;
let userName: string = 'Professor';

let isStudying: boolean = true;

console.log(`Hello ${userName}, registration: ${isStudying}`);

//Arrays & Objects
// Arrays need the primitive type and the brackets if youre only using one type

let users: string[] = ['Tabitha', 'Mercury', 'Abigail', 'Porche'];

// Objects need to have the type as a template with the properties' types before declaring
//Type Assignment 

let myNewObject: {
    name: string,
    age: number
}

let myNewObject = {
    name: 'lucy',
    age: 29
}

// To have an array with more than one object, we Make the type assignment for the object and add brackets at the end
let userNameProfile: {
    name: string,
    isLoggedIn: boolean
    age: number
}[];

// Type Inference - TS Infers the type of a value without explicitly stating so you don't always have to declare the type
// Union Types - Using the "pipe" button on keyboard you declare each type your value will be

let listOfUsers: string | number = 'Max Oberon';
listOfUsers = 1237;

//Type Aliases - To keep your type definitions DRY, you can create a base type and store your type definition
// Of Type People, of type CommentCard (like in the Candy Jam) 
// use the keyword 'type' to let TS know youre making an alias
// You can replace your type definition with the Alias whereever you need it now

type Person = {
    name: string,
    age: number
}

//Functions & Function Types - There are different places that types can be assigned in Functions
//Functions in TS infer the return value's type in most cases, so there no need to set it explicitly

let subtraction = (a: number, b: number) => {
    return a - b;
}

// Below is what declaring the function type would look like:
// let subtraction = (a: number, b: number): number => {
//     return a - b;
// }

//Generics - Helps functions discern type inference when you need to use the any type - type safe and flexible
//typescript doesnt pick up a specific value type of the arguments if you use the any type to create a function
// generics help us convert a function to a generic where when we pass in arguments the function and infer the correct value type

function insertAtBeginning<Type>(array: any[], value: Type) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [0, 1, 2, 3, 4];
const undatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
console.log(undatedArray);
console.log(stringArray);