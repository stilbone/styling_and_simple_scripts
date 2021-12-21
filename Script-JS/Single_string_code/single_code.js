// Подсчет символов в строке
const characterCount = (str, char) => str.split(char).length - 1;

// Проверка объекта на пустоту
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// Ожидание перед выполнением
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// Вычисление разницы в днях между двумя датами
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))

// Перенаправление на другой URL
const redirect = url => location.href = url

// Проверка поддержки режима Touch на устройствах
const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch)

// Вставка HTML-строки после элемента
const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html);

// Перемешивание массива
const shuffle = arr => arr.sort(() => 0.5 - Math.random())

// Получение выбранного текста с веб-страницы
const getSelectedText = () => window.getSelection().toString();

// Получение произвольного логического значения
const getRandomBoolean = () => Math.random() >= 0.5

// Вычисление среднего значения массива
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length





