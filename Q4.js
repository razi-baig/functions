/* 
Question # 4
The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
​
Create a function called calcCircumfrence:
​
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
 ​
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
​*/

function calcArea(radius = "") {
  return `The area is ${Math.PI * radius ** 2}`;
}

console.log(calcArea(2));

// ​function calcCircumfrence(radius = "") {
//     return `The circumference is ${2 * Math.PI * radius}`;
// }

// console.log(calcCircumfrence(8))

function calcCircumfrence(radius = "") {
  return `The circumference is ${2 * Math.PI * radius}`;
}
console.log(calcCircumfrence(2));
