// 1. Вибір напою
let drink = prompt("Введіть Кава, Чай, Сік"); // Може бути "Кава", "Чай", "Сік"

switch (drink) {
  case "Кава":
    console.log("Ви вибрали каву.");
    break;
  case "Чай":
    console.log("Ви вибрали чай.");
    break;
  case "Сік":
    console.log("Ви вибрали сік.");
    break;
  default:
    console.log("Невідомий напій.");
}

// 2. День тижня
let day = prompt("Введіть день тижня"); // Введений рядок, наприклад "понеділок"

switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п’ятниця":
    console.log("Це робочий день.");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний.");
    break;
  default:
    console.log("Невідомий день тижня.");
}

// 3. Пора року за номером місяця
let month = Number(prompt("Введіть номер місяця")); // Номер місяця від 1 до 12

switch (month) {
  case 12:
    console.log("Зима");
    break;
    case 1:
        console.log("Зима");
        break;
        case 2:
    console.log("Зима");
    break;
    
    case 3:
        console.log("Весна");
        break;
    case 4:
    console.log("Весна");
    break;
    case 5:
    console.log("Весна");
    break;
    case 6:
        console.log("Літо");
        break;
    case 7:
    console.log("Літо");
    break;
  case 8:
    console.log("Літо");
    break;
    case 9:
        console.log("Осінь");
        break;
  case 10:
    console.log("Осінь");
    break;
    case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невірний номер місяця.");
}

// 4. Світлофор (кольори)
let color = prompt("Введіть світло світлофора"); // Може бути "червоний", "зелений", "жовтий"

switch (color.toLowerCase()) {
  case "червоний":
    console.log("СТОП");
    break;
  case "зелений":
    console.log("ЙТИ");
    break;
  case "жовтий":
    console.log("ЧЕКАТИ");
    break;
  default:
    console.log("Невідомий колір.");
}

// 5. Калькулятор
let num1 = Number(prompt("Введіть 1 число"));
let num2 = Number(prompt("Введіть 2 число"));
let operator = prompt("Введіть оператор"); 

switch (operator) {
  case "+":
    console.log(`Результат: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Результат: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Результат: ${num1 * num2}`);
    break;
  case "/":
    if (num2 !== 0) {
      console.log(`Результат: ${num1 / num2}`);
    } else {
      console.log("Помилка: ділення на нуль!");
    }
    break;
  default:
    console.log("Невідомий оператор.");
}