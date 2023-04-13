// oop object oriented programming

//კონსრუქტორ ფუნქცია  იწერება დიდი ასოთი და გამოიყენება სიტყვა new მასთან


//construction functions

// const PersonInfo = function ( firstName, birthYear){
//     console.log(this); //ცარიელი ობიექტი

//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this.getUserAge = function(){
//     //     console.log(2023- this.birthYear); ცუდი გზაა ჩაწერის 
//     // }
// }

// // პროტოტიპი არის მექანიზმი, რომლითაც ჯს ობიექტები ერტმანეთისგან იღებენ მემკვირეობით თვისებებს, რომელიც კონსრტუქრო ფუნქციაში იქნება შექმნილი


// PersonInfo.prototype.getUserAge = function(){
//     onsole.log(2023- this.birthYear); // this არის ობიექტი
// }


// const info = new PersonInfo("tom", 2000);
// const info2 = new PersonInfo("ana", 1999); 
// const info3 = new Student("Tamo", 2000, 'Gakhokidze');

// // მნიშვნელობებს გადავცემთ კონსტრუქტორ ფუნქციის გამოძახების დროს


// const Student = function(firstName, birthYear, lastName){
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     PersonInfo.call(this, firstName, birthYear);
//     this.lastName = lastName;

// }

// //call & apply რა უნდა გახდეს this ( apply მასივი, call ობიექტი)

// console.log(info);
// console.log(info2);
// console.log(info3);
// console.log(PersonInfo.prototype);


// info.getUserAge();
// info2.getUserAge();

// new უკან მიდის შემდეგი პროცესები:
//1. იქმნება ცარიელი ობიექტი
//2. ფუნქცია გამოძახება და this ხდება ეს ობიექტი
//3 ეს ფუნქცია უკავშირდება პროტოტიპს
//4. ფუნქცია აბრუნებს ობიექტს

// ფუნქცია ოპიექტის შიგნით არის მეთოდი




// კლასი არის ფუქნციის სპეციალური ტიპი

// class Person {
//     constructor(firstName, BirthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     printAge(){
//         console.log(2023- this.birthYear);
//     }
// }

// const info = new Person('Tamo', 2000);
// console.log(info);

// info.printAge();




//inheritence - მემკვიდრეობით თვისებების გადაცემა

// class dogInfo{
//     constructor(animalName, animalAge){
//         this.animalAge = animalAge;
//         this.animalName =animalName;
//     }
//     getInfo(){
//         return `animal name is ${this.animalName} and dog age is ${this.animalAge} `;
//     }
// }

// class catInfo extends dogInfo{
//     constructor(animalName, animalAge, animalWeight){
//         super (animalName, animalAge); // მშობელი ფქუნციის გამოძახება 
//         this.animalWeight = animalWeight; // უმატებ განსხვავებულ ცვლადს
//     }
// }

// const animal = new dogInfo('sisi', 1);
// console.log(animal);
// let animalInfo = animal.getInfo(); //რადგან return ვიყენებ, ამიტომ სადმე ცვლადში უნდა შევინახოთ, ისე ვერ გამოიძახებ

// console.log(animalInfo);


// const animal2 = new catInfo("Rose", 3, 3);
// console.log(animal2);



//

// export წერ მთავარ ფაილში, საიდანაც აიმპორტებ
// import from ... წერ სადაც აიმპორტებ
// script type 'modules' - html-ში

//1.  import {sayHi} from "./module.js";
//sayHi();

//2. import {sayHi, HelloTest} from "./module.js";
//sayHi();
//HelloTest();


//3. import * as func from "./module.js"; ყველა ფუნციის შემოტანა, არქმევ სახელს 

//function.sayHi();
//func.HelloTest();


//4. import {sayHi as hiFunction, HelloTest as hello } from "./module.js";
//შენ არქმევ სახელებს და იმ სახელებით იძახებ

//hiFunction();
//hello();



// export

//1.  export function sayHi(){
//     console.log('Hi');
// }

// export function HelloTest(){
//     console.log('Hello');
// }

// 2. function sayHi (param){
//     console.log("hi");
// }
// function HelloTest(){
//     console.log('hello');
// }

// export{sayHi, HelloTest}



//npm - node package manager - გარე ბიბლიოთეკების დასაყენებლად გამოიყენება

//npmjs.com