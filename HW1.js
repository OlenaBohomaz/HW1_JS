// 1. Ви прийшли в Макдональдз з трьома друзями.
// Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
// хочемо щоб були або 3 гамбургера + 1 кола або 2 наггетси + 2 картоплы фрі
let hamburger = 2;
let fries = 1;

if (hamburger >= 3 && fries >= 1) {
    console.log("Ми поїли");
} else {
    console.log("Ми йдемо в інше кафе");
}

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.
let price = 1354;
if (1000 <= price <= 1900) {
    console.log(price);
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.
let price1 = 1560;
if (price1 < 1000 && price1 >= 1900) {
    console.log(price1);
}

let price2 = 1901;
if (1000 <= !price2 <= 1900) {
    console.log(price2);
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.
let season = 4;
if (season == 1) {
    console.log("January");
} else {
    if (season == 2) {
        console.log("February");
    } else {
        if (season == 3) {
            console.log("March");
        } else {
            if (season == 4) {
                console.log("April");
            } else {
                if (season == 5) {
                    console.log("May");
                } else {
                    if (season == 6) {
                        console.log("June");
                    } else {
                        if (season == 7) {
                            console.log("July");
                        } else {
                            if (season == 8) {
                                console.log("August");
                            } else {
                                if (season == 9) {
                                    console.log("September");
                                } else {
                                    if (season == 10) {
                                        console.log("October");
                                    } else {
                                        if (season == 11) {
                                            console.log("November");
                                        } else {
                                            if (season == 12) {
                                                console.log("December");
                                            } else {
                                                console.log("Undefined");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.
let a = 35;
let b = 90;
let c = 89;
let result = 0;
if (a < b) {
    if (a > c) {
        result = a;
    } else if (b < c) {
        result = b;
    } else {
        result = c;
    };
    console.log(result);
}
// 6.  Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.
let day = 4;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thirsday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('undefined');
        break;
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.
let operation = "/";
let d = 50;
let n = 10;
switch (operation) {
    case "+":
        console.log(d + n);
        break;
    case "-":
        console.log(d - n);
        break;
    case "*":
        console.log(d * n);
        break; case "/":
        console.log(d / n);
        break;
}

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word1 = "apple";
word1 = word1.replace(/[aeiouy]/gi, '');
console.log(word1);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

//число заканчивается на 1 => окончания нет "" метр
// от 2 до 5 (2-4 включительно) => окончание "и" метри
// от 5 до 9 (5-9 включительно) => окончание "рів" метрів
// 1.1 -окончание "ра" метра
let metr = 2345;
let km = (metr / 1000).toFixed(1);
let metrStr = metr.toString();
let kmStr = km.toString();
let result2 = metr + ' метр';
let result1 = km + ' кілометр';


if (metrStr.endsWith('2') || metrStr.endsWith('3') || metrStr.endsWith('4') || metrStr.includes('.')) {
    result2 = result2 + 'и';
} else if (metrStr.endsWith('1')) {
    result2 = result2;
} else if (metrStr.endsWith('5') || metrStr.endsWith('6') || metrStr.endsWith('7') || metrStr.endsWith('8') || metrStr.endsWith('9') || metrStr.endsWith('0')) {
    result2 = result2 + 'ів';
}


if (kmStr.endsWith('2') || kmStr.endsWith('3') || kmStr.endsWith('4') || kmStr.includes('.')) {
    result1 = result1 + 'и';
} else if (kmStr.endsWith('1')) {
    result1 = result1;
} else if (kmStr.endsWith('5') || kmStr.endsWith('6') || kmStr.endsWith('7') || kmStr.endsWith('8') || kmStr.endsWith('9') || kmStr.endsWith('0')) {
    result1 = result1 + 'ів';
}

console.log(`${result2} дорівнює ${result1}`);
