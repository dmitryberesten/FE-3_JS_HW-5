// ЗАВДАННЯ 4

// Створіть змінну для зберігання назви кольору.
// Виводьте повідомлення відповідно до вибраного кольору:
// якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let color = "зелений";

switch (color.toLowerCase()) {
  case "червоний":
    console.log("Стоп! Зупиніться.");
    break;
  case "зелений":
    console.log("Йти. Шлях вільний!");
    break;
  case "жовтий":
    console.log("Чекати. Приготуйтесь.");
    break;
  default:
    console.log("Невідомий колір. Введіть червоний, зелений або жовтий.");
}
