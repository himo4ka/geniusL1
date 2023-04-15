//1

// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = name;
// console.log(city);

//2

//Який буде результат виконання скрипта?

// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//3

//Видобути число зі змінних
// let a = "5";
// console.log(typeof a);// string
// console.log(typeof Number.parseInt (a)); // number 5
// let b = "13cvb";
// console.log(typeof b);// string
// console.log(typeof Number.parseInt (b)); // number 13
// let c = "12.9sxdcfgv";
// console.log(typeof c);// string
// console.log(typeof Number.parseFloat (c)); // number 12
// вивести в консоль тип

//4

//Зробіть, щоб 0.1 + 0.2 = 0.3

// let a = 0.1;
// let b = 0.2;
// console.log((a*10 + b*10)/10);

//5

//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//6

//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random()*(4-2)+2);

//7

//дізнатись довжину message const message = "Welcome to Bahamas!";

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19


//8

//вивести в консоль message великими літерами

// let a = "message";
// console.log(a.toUpperCase()); // MESSAGE

//9

// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = "Marina";
// user.age = 37;
// user.city = "Kyiv";
// console.log(user); // Object { name: "Marina", age: 37, city: "Kyiv" }
// delete user.city;
// console.log(user); // Object { name: "Marina", age: 37 }
// user["likes flowers"] = true;
// console.log(user); // Object { name: "Marina", age: 37, city: "Kyiv", "likes flowers": true }

//10

// За допомогою циклу “for...in” вивести в консоль ключі і значення об*єкта

// let user = {
//     name: "Marina",
//     age: 37,
//     city: "Kyiv",
//     likeFlowers: true,
// };
// for (let key in user) {
//     console.log(key); // name age city likeFlowers
//     console.log(user[key]); // Marina 37 Kyiv true
// }
