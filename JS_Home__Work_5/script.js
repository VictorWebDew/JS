// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = function (a, b) {
    return a * b;
    console.log(square(5,5));
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circle = (r) => Math.PI * Math.pow(r, 2);
console.log(circle(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
console.log(cylinder(20, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 'apple', true];
function eachElm(all_Items) {
    for (const item of all_Items) {
        console.log(item);
    }
}

eachElm(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('Hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function someFunc(text) {
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>
    `)
}

someFunc("Hi there");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function func(text, quantity) {
    document.write(`<ul>`)
    for (let i = 0; i > quantity; i++) {
        document.write(`</ul>`)
    }
}
func('Hello', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [5, 'hello', true, 'world'];

let el = function (items) {
    document.write(`<ul>`)
        for (const item of items) {
            document.write(`<li>`${item}`</li>`);
        }
    document.write(`</ul>`)
}

el(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const arr = [
    {
        name: 'Victor',
        age: 23
    },
    {
        name: 'Olya',
        age: 18
    }
]

const people = function(array) {
    for (const person of array) {
        document.write(`${person.name}  ${person.age}`)
    }
}

people(arr);

// - створити функцію яка повертає найменьше число з масиву

let arr = [1,3,2,77,-5,4];

function findMin(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}

let minNumber = findMin(arr);
console.log(minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [1,2,10];

function summing(numbers) {
    let summingResult = 0;
    for (const number of numbers) {
        summingResult += number;
    }
    return summingResult;
}

console.log(summing(arr));