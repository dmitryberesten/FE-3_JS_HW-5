// ЗАВДАННЯ 5

// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
// Виконайте відповідну операцію та виведіть результат.
// У випадку ділення на нуль — виведіть попередження.

let num1 = 10;
let num2 = 5; 
let operator = "ferferf"; // Оператор: "+", "-", "*", "/"

switch (operator) {
  case "+":
    console.log(`Результат: ${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`Результат: ${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`Результат: ${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Попередження: ділення на нуль неможливе!");
    } else {
      console.log(`Результат: ${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Невідомий оператор. Використовуйте +, -, * або /.");
}



