// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// -Вивести кожну змінну за допомогою: console.log
let hello, owu, com, ua, one, ten, minus, oneTwoThree, three_14, two_7, sixteen, pureTrue, pureFalse;
hello = "hello";
owu = "owu";
com = "com";
ua = "ua";
one = 1;
ten = 10;
minus = "-999";
oneTwoThree = 123;
three_14 = 3.14;
two_7 = 2.7;
sixteen = 16;
pureTrue = true;
pureFalse = false;
let allTogethre = `${hello}, ${owu}, ${com}, ${ua}, ${one}, ${ten}, ${minus}, ${oneTwoThree}, ${three_14}, ${two_7}, ${sixteen}, ${pureTrue}, ${pureFalse};`
console.log(allTogethre);


// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Victor";
let middleName = "Victorovich";
let lastName = "Sichkov";

// const person = "firstName" + "" + "middleName" + "" + "lastName";

const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);