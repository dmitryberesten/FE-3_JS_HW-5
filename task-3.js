// ЗАВДАННЯ 3

// Створіть змінну для зберігання номера місяця.
// За номером місяця визначайте пору року
// і виводьте відповідне повідомлення.

let monthNumber = 11;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Це зима. Холодно і казково!");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Це весна. Час цвітіння і пробудження природи!");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Це літо. Час тепла і відпусток!");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Це осінь. Золота пора року!");
    break;
  default:
    console.log("Невірний номер місяця. Введіть число від 1 до 12.");
}
