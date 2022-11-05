// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.

let arr = [];
arr[0] = true;
arr[1] = false;
arr[2] = "Victor";
arr[3] = 21;
arr[4] = "Berin";
arr[5] = "Lutien";
arr[6] = false;
arr[7] = true;
arr[8] = "Victor";
arr[9] = 18;

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// Створити 3 об'єкти які описують книги. Поля об'экту: title, pageCount, genre.

let book1 = {
    title: 'Silmarilion',
    pageCount: "800",
    genre: "adventures"
}

let book2 = {
    title: 'Witcher',
    pageCount: "1200",
    genre: "adventures"
}

let book3 = {
    title: 'Iliada',
    pageCount: "700",
    genre: "Myths and legends"
}

// Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre, authors. Поле "автори" - масив.
    // Кожен фатор має поля name, age

let book4 = {
    title: 'Iliada',
    pageCount: "700",
    genre: "Myths and legends",
    author: [{
        name: "Homer",
        age: 48
    }]
}

let book5 = {
    title: 'Silmarilion',
    pageCount: "800",
    genre: "adventures",
    author: [{
        name: "John Roland",
        age: 35
    }]
}

let book6 = {
    title: 'Witcher',
    pageCount: "1200",
    genre: "adventures",
    author: [{
        name: "Andrzej",
        age: 40
    }]
};



