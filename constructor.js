// constructor = a speacial method for assinging properties.automatically called when creating an object


// class car{

//     constructor(name,year,color){
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log("you drive a car");
//     }
//     break(){
//         console.log("you step to the break");
//     }
// }

// let car1 = new car("maruti",2022,"red");
// let car2 = new car("Hyundai",2015,"Black");

// console.log(car1.name);
// console.log(car1.year);
// console.log(car1.color);


// using this keyword
// class car{

//     constructor(name,year,color){
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         // console.log("you drive a car");
//         console.log("you drive the car", this.name);
//     }
//     break(){
//         console.log("you buy ",this.color, "car");
//     }
//     // whatisThis(){
//     //     return this;
//     // }
// }

// let car1 = new car("maruti",2022,"red");
// let car2 = new car("Hyundai",2015,"Black");

// console.log(car1.whatisThis());
// car1.drive();



// super keyword= ref to the parent class (super class) very similar to "this" keyword can use a super classes: cons methods


class Person{
    constructor(name,age){
    this.name =name;
    this.age =age;
    }
}

class Student extends Person{
    constructor(name,age,rollno){
    super(name,age);
    this.rollno =rollno;
}
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

let student = new Student("Darshiny",21, 25);
let teacher = new Teacher("Jayabharathi" , 23, "mathamatics");

console.log(student.name);
console.log(student.age);
console.log(student.rollno);


console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.rollno);