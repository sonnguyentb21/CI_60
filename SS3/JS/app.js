
import Navbar from './Navbar.js';

/*
    class calculator
      sum(a,b) => a+b;
      subtract(a,b) => a-b;
      multiply(a,b) => a*b;



*/

// class Calculator {
// 	static sum(a, b) {
// 		return a + b;
// 	}
// 	static subtract(a, b) {
// 		return a - b;
// 	}
// 	multiply(a, b) {
// 		return a * b;
// 	}
// }

// // let calc = new Calculator();
// // calc.sum(1,2);
// // Calculator.sum(1,2);
// // Calculator.subtract(3,4);
// // console.log(Calculator.subtract(3,4));
// // console.log(Calculator.sum(1,2));

// // let calc = new Calculator();
// // console.log(calc);

// class Person {
// 	firstName;
// 	lastName;
// 	_age;

// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	get fullName() {
// 		return this.firstName + " " + this.lastName;
// 	}
// 	set age(a) {
// 		if (a < 0 || a > 100) {
// 			console.log("nhập điêu");
// 		} else {
// 			this._age = a;
// 		}
// 	}

//   get age(){
//     return this_age;
//   }
  
// }

let ngocTrinh = new Person("Trinh", "Ngoc");
ngocTrinh.age = 30;
// console.log(ngocTrinh.fullName);
console.log(ngocTrinh._age);
