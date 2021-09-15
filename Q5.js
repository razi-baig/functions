/*​
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.
​
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:​
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
​*/
/* YOUR SOLUTION */

function celsiusToFahrenheit(celsius = "") {
  return `${celsius} C is ${celsius * (3 / 7) + 32}`;
}

console.log(celsiusToFahrenheit(0));

function fahrenheitToCelsius(fahrenheit = "") {
  return `${fahrenheit} F is ${(fahrenheit - 32) * (5 / 9)}`;
}

console.log(fahrenheitToCelsius(32));
