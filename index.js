
// ==========================================
// PART 1 - VARIABLES AND OPERATORS
// ==========================================

// 1. var let const

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);


// 2. Data Types

let name = "Gopinath V";
let age = 28;
let salary = 0;
let isWorking = false;

console.log(typeof name);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof isWorking);


// 3. Array

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);


// 4. Object

let person = {
    name: "Gopinath V",
    age: 28,
    fatherName: "Vasudevan",
    motherName: "Vidya V",
    location: "Rameswaram",
    education: "BE Computer Science",
    college: "AVIT College",
    passedOut: 2020,
    skills: "Python, SQL, JavaScript",
    experience: "Fresher"
};

console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person.skills);


// 5. Arithmetic Operators

let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);


// 6. Pre Increment

let num1 = 10;
console.log(++num1);


// 7. Post Increment

let num2 = 20;
let value = num2++;

console.log(num2);
console.log(value);


// 8. Assignment Operators

let num3 = 10;

num3 += 5;
console.log(num3);

num3 -= 5;
console.log(num3);

num3 *= 2;
console.log(num3);

num3 /= 2;
console.log(num3);

num3 %= 3;
console.log(num3);

num3 **= 2;
console.log(num3);


// 9. Comparison Operators

console.log(100 > 50);
console.log(100 == 100);
console.log(100 != 200);


// 10. Loose and Strict Equality

console.log(25 == "25");
console.log(25 === "25");


// 11. AND Operator

console.log(10 > 5 && 20 > 10);


// 12. OR Operator

console.log(10 > 20 || 30 > 15);


// 13. NOT Operator

console.log(!(10 > 5));


// 14. Ternary Operator

let voter = 28;

let result = voter >= 18 ? "Eligible" : "Not Eligible";

console.log(result);


// 15. Template Strings

let studentName = "Gopinath V";
let studentAge = 28;
let course = "JavaScript";

console.log(`My name is ${studentName}`);
console.log(`My age is ${studentAge}`);
console.log(`My course is ${course}`);


// 16. Data Types

console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));


// 17. Type Casting

let z = "500";

console.log(Number(z) + 100);


// 18. Boolean

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));



// ==========================================
// PART 2 - CONDITIONAL STATEMENTS
// ==========================================


// 1. Positive or Negative

let number = 10;

if (number > 0) {
    console.log("Positive Number");
}
else {
    console.log("Negative Number");
}


// 2. Voting Eligibility

let age1 = 28;

if (age1 >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}


// 3. Even or Odd

let n = 7;

if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


// 4. Pass or Fail

let mark = 75;

if (mark >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// 5. Time Greeting

let time = 10;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
}
else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
}
else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time <= 18) {
    console.log("Good Evening");
}
else if (time >= 19 && time <= 24) {
    console.log("Good Night");
}
else {
    console.log("Invalid Time");
}


// 6. Nested If

let age2 = 28;
let height = 165;
let weight = 74;

if (age2 >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        }
        else {
            console.log("Weight is low");
        }
    }
    else {
        console.log("Height is low");
    }
}
else {
    console.log("Age is not eligible");
}


// 7. Traffic Light

let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}


// 8. Weekdays

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


// 9. Login

let username = "Gopinath";
let password = "12345";

if (username == "Gopinath" && password == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Login");
}


// 10. Grade

let marks1 = 85;

if (marks1 >= 90) {
    console.log("Grade A");
}
else if (marks1 >= 75) {
    console.log("Grade B");
}
else if (marks1 >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}



// ==========================================
// PART 3 - LOOPS
// ==========================================


// 1. 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 4. Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// 5. Multiplication Table

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// 6. Sum

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);


// 7. While Loop

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


// 8. Do While

let k = 1;

do {
    console.log(k);
    k++;
}
while (k <= 5);


// 9. For Of - String

let word = "GOPINATH";

for (let letter of word) {
    console.log(letter);
}


// 10. Programming Languages

let languages = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

for (let language of languages) {
    console.log(language);
}


// 11. For In

let employee = {
    name: "Gopinath V",
    age: 28,
    location: "Rameswaram",
    designation: "Fresher"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// 12. Mobile Brands

let mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];

for (let mobile of mobiles) {
    console.log(mobile);
}



// ==========================================
// PART 4 - COMBINED CHALLENGE
// ==========================================


// 1. Student Marks

let marks = [85, 90, 75, 60, 95];

for (let mark of marks) {
    console.log(mark);
}


// 2. Employee Details

let emp = {
    name: "Gopinath V",
    age: 28,
    salary: 0,
    location: "Rameswaram",
    education: "BE Computer Science",
    college: "AVIT College",
    skills: "Python, SQL, JavaScript"
};

for (let key in emp) {
    console.log(key, emp[key]);
}


// 3. Even and Odd

let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num + " Even");
    }
    else {
        console.log(num + " Odd");
    }
}


// 4. Student Result

let student = {
    name: "Gopinath V",
    marks: 80
};

if (student.marks >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// 5. Traffic Signal

let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// 6. Multiplication Table

let table = 7;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}


// 7. Fruits Uppercase

let fruitList = ["apple", "banana", "orange", "mango", "grapes"];

for (let fruit of fruitList) {
    console.log(fruit.toUpperCase());
}


// 8. Employee Salary

let employee1 = {
    name: "Gopinath V",
    age: 28,
    salary: 0,
    location: "Rameswaram"
};

for (let key in employee1) {
    console.log(key, employee1[key]);
}

if (employee1.salary > 25000) {
    console.log("Salary is above 25000");
}
else {
    console.log("Salary is below 25000");
}


// 9. Login System

let user = "Gopinath";
let pwd = "12345";

if (user == "Gopinath" && pwd == "12345") {
    console.log("Login Successful");
}
else {
    console.log("Login Failed");
}


// 10. Student Management

let students = [
    {
        name: "Gopinath V",
        marks: 85
    },
    {
        name: "Student 2",
        marks: 30
    },
    {
        name: "Student 3",
        marks: 75
    },
    {
        name: "Student 4",
        marks: 25
    },
    {
        name: "Student 5",
        marks: 90
    }
];

for (let student of students) {
    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);

    if (student.marks >= 35) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}
