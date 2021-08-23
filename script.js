"use strict"; //Говорим скриптовому файлу, что мы работаем в современном режиме, при его неследовании выводит фатальную ошибку;

/*
В качестве именни переменной применяеться: буквы, цыфры, символов долара и нижнего подчеркивания и первый символ не должен быть цифрой;
*let numner = 5;
*const leftBorderWidth = 1;
Прямых констант в js не бывает!;
*const obj = {
*	illya: "solodko"
*};
*const natali = {
*	age: 31,
*	sex: "woman",
*	mom: "galina"
*}

*console.log(`Natalya is ${natali.age}, state ${natali.sex}, her mom ${natali.mom}`);

*console.log("illya " + obj.illya);
*obj.illya = "perehinets";

*console.log("illya " + obj.illya);

*console.log(someName); При выводе вызывает undefined вместо ошибки;
*var someName = "Ivan"; var - устареллая версия переменной, эта переменная существует до того как была обьявленна в коде в отличии от let котороя появляеться только после обьявления;

*{
*	let resultLet = 100;
*}
*console.log(resultLet); //Переменная вне видимости скобок;

*{
*	var resultVar = 100; //Делаеться глобальной
*}
*console.log(resultVar); //Переменная в видимости и выведет значение 100;

ТИПЫ ДАННЫХ

*let number = 4.6; //Дробное число;

*console.log(9 / 0); //На ноль делить нельзя, но в js можно, резульатом будет infinity

*console.log("illya" / 0); //Строка+число не считаеться. Результатом будет NaN(Not-a-Number);

*const persone = "5";//Это строка, не число, а вот без кавычек будет число;

ReferenceError: ошибка ссылочного типа;

Обьект
*const obj2 = {
*	name: "Illya",
*	age: 14,
*	isMarried: false
*}

К обьекту можно обратиться двумя способами:
*console.log(obj2.name);
*console.log(obj2['name']);

Массив
*let arr = ["Illya", "Lonya", { name: "deprecated", boy: "girl" }, ['calosh']];
*console.log(arr['2']);

Разница между обьектоми массивом:

* обьекту необходим кдюч-значение;
* массив располагает елементы со значением строго по порядку с ключём начия с 0

Выводит предупреждение на экран
* alert("Ошибочка");


Тоже что и alert() только с выбором да или нет.
* @return(boolean) - true || false;

* const result = confirm("You under 18?");

Promt
* @return(string);
* const result = promt("How old are Nataliya", "31");


Оператор с плюсом(+) перед строкой, превращает её в числовой тип данных;
* const someString = +"strings";
* console.log(typeof (someString));

Баг js
* @return(object) - null;
* console.log(typeof (null));


* let name = "boris";

Обычная конкантинация
* console.log("His name is " + name);

Интерполяция; работает только с косыми кавычками `
* console.log(`His name is ${name}`);

* const test = prompt('kavo?', 'menya');
* console.log(`vibrali ${test}`);


* let tcheslavie = 10;
* for (let i = 1; i <= tcheslavie; i++) {
* 	console.log("not enought");
* }


Если знаем что результат будет число то превращаем строку в число через+;

Ставим +, потому что в ответе будет число, а prompt() возваращает строку(string);
*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

*const personalMovieDB = {
*	count: +numberOfFilms,
*	movies: {},
*	actors: {},
*	genres: [],
*	privat: false
*};

* const
*	lastFilm = prompt('Один из последних просмотренных фильмов ?', ''),
*	rate = prompt('На сколько оцените его ?', '');

Данные в обьект передаем через [] из-за поддержки браузеров и кирилиццы.
*personalMovieDB.movies[lastFilm] = rate;

*console.log(personalMovieDB);


* const
* 	illya = 14,
* 	lonya = 11;
*
* let jojo = (illya > lonya) ? console.log("Illya older than Lonya") : console.log("Lonya is older than Illya");


const babushkaMasha = 68;

В конструкции switch/case, идет строгое сравнение в отличии от обычных условий e.g не может быть case 14 > 68
switch (babushkaMasha) {
	case 14:
		console.log("Too young");
		break;
	case 90:
		console.log("Too old");
		break;
	case 68:
		console.log("You damn right");
		break;
	default:
		console.log("Idk");
}


 Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог:
 a)оставить ответ в виде пустой строки;
 b)отменить ответ или ввести название фильма длинее, чем 50 символов.
Если это происходит - возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, если он:
  a)меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов";
  b)от 10 до 30 - "Вы классический зритель";
  c)больше - "Вы киноман";
  d)не подошло ни к одному варианту - "Произошла ошибка".

4) Потренироваться и переписать цикл еще двумя способами


// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else {
	console.log("Вы киноман");
}


console.log(personalMovieDB);
// personalMovieDB.movies[lastFilm] = rate;

При загрузке скрипка, первыми грузяться функции и переменные var

Обычная фунция
function addText(name) {
	const prefix = "Hello";
	return console.log(`${prefix} ${name}`);
}
addText("Sasha");

//Expression function
const printHello = function () {
	console.log("Hello World!");
};
printHello();

//Arrow function
const test = (a, b) => console.log(a - b);
test(20, 5);



const someString = "Illya activeted double barell mode";
console.log(someString[4]); //вернет четвертую букву строки.

let stringIndex = someString.indexOf("double"); // возвращает индекс значения someString["16"];

let editedString = someString.slice(16, 23); // вырезает заданое значение;

let editedString = someString.substring(16, 23); // тоже что и slice(),но если аргументом будет Nan или негативное число, оно будет считаться нулем;

let editedString = someString.substr(stringIndex, 6); // первый аргумент откуда начинать, второй - сколько символов забрать вытянуть;

let someNum = "3.67px";
let editedNum = Math.round(someNum); //Округляет число
let editedNum = parseInt(someNum); //Превращает строку в number, делает его целым(без округляния, просто обрасывая всё после запятой);
let editedNum = parseFloat(someNum); //Тоже что и parseInt, но может вернуть и дробное число.


console.log(editedNum);


 Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно



let numberOfFilms;


function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
	}
}
start();

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function writeYourGenres() {
	for (let i = 0; i <= 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
	}
}

writeYourGenres();

function showMyDB(param) {
	if (param == false) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat20);

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let lastFilm = prompt('Один из последних просмотренных фильмов ?', '');
		if (lastFilm == null && lastFilm == '') {
			i--;
		} else {
			personalMovieDB.movies[lastFilm] = 'da';
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else {
		console.log("Вы киноман");
	}
}
detectPersonalLevel();

let first = "pirst";

//Замыкание

//Пример первый
function test() {
	let first = "first level";
	function test1() {
		first = "second level";
		function test2() {
			first = "third level";
		}
		test2();
	}
	test1();
	console.log(first);
}
test();

*Пример второй

*SCOPE - ОБЛАСТЬ ВИДИМОСТИ;

*callback - это функция, котороя должна выполниться после выполнения другой функци

//lexical scooping
function init() {
	var name = "Mozilla"; // name is a local variable created by init
	function displayName() { // displayName() is the inner function, a closure
		alert(name); // displayName() uses variable declared in the parent function
	}
	displayName();
}
init();

*Замыкание

*Вернет тоже самое что и плошлый пример
function makeFunc() {
	var name = "Mozilla";
	function displayName() {
		alert(name);
	}
	return displayName;
};

var myFunc = makeFunc();
myFunc();



function kavo(name, callback) {
	console.log(name);
	callback();
}


kavo('illya', function () {

	console.log(`andromeda ${name}`);
});

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	test: function () {
		console.log("da");
	}
};

Метод который вытягивает ключи обьекта в массив
console.log(Object.keys(options));

*Удаление свойства
delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Обьект Свойство ${i} имеет значение ${options[key][i]}`);
		}
		counter++;
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;

	}
}
console.log(counter);

*ДЕСТРУКТИЗАЦИЯ
const { name, width } = (options);
console.log(name);
console.log(width);

console.dir(String);

const father = {
	age: 51,
	name: "Vyacheslav",
	maried: true,
	children: {
		first: "Nata",
		second: "Slava",
		third: "Illya",
		fourth: "Lonya",
		fifth: "Eugen"
	}
}

for (let k in father) {
	let str;
	switch (k) {
		case 'age':
			str = `Моему отцу ${father[k]} года, `;
			break;

		case 'name':
			str = `его зовут ${father[k]}, `;
			break;
		case 'maried':
			if (father[k] == true) {
				str = `он женат, `;
			}
			break;

		case 'children':
			str = `у него ${Object.keys(father[k]).length} детей`;
			break;

		default:
			break;
	}
	console.log(str);
}

const actors = ['stalone', 'jacky jan', 'bruce lee', 'jak fresco'];
actors.pop();
actors.push('bruce willise');

actors[999] = 'staky jeencesco';
console.log(actors.length);
console.log(actors);

actors.forEach(function (item, key, actors) {
	console.log(`${key}: ${item} внутри массива ${actors}`);
});

*Разница между циклом for (let key of arr) и методом arr.forEach(item, key, arr),
*состоит в том, что цикл можно прервать, метод foreach - нет.

*Есть метод перебора масива
Array.forEach();
*И методы перебора с трансформацией значений
Array.map();
Array.every();
Array.some();
Array.filter();
Array.reduce();

const arr = [6, 33, 1, 38, 375];
arr.sort(function (a, b) { return a - b; });
console.log(arr);

*Различие между масивом и псевдомасивом в том, что псевдомасив не имеет методов

const obj = {
	name: 'test1',
	arr: ['illya', 'lonya', 'egor']
};
obj.arr.forEach(function (name, key) {
	console.log(`Его зовут ${name} и он стоит под номером ${key}`);
});


*Примитивные типы данных - это данные, которые не обьекты и у которых нету методов



const a = 5;
let b = a;
b = b + 5;

console.log(b);

const obj = {
	a: 5,
	b: 2,
}

const copy = obj; //Не копирует а ссылается
copy.a = copy.a + copy.b;

console.log(copy);
console.log(obj);

const obj = {
	a: 5,
	b: 2,
	c: {
		x: 1,
		y: 2
	}
};

*Поверхностная копия обьекта
let copyObj = copy(obj);

copyObj.a = copyObj.a + 2;
copyObj.c.x = 10;// Будет ссылаться на прошлый обьект
console.log(copyObj);
console.log(obj);

function copy(mainObject) {
	let copyObj = {};
	for (let key in obj) {
		copyObj[key] = mainObject[key];
	}
	return copyObj;
}
*Поверхностная копия обьекта

const additional = {
	d: 8,
	e: 7
}


*Независимая поверхсностная копия обьекта
let clone = (Object.assign({}, additional));
clone.d = 20;
console.log(additional);
console.log(clone);

let fruits = ["banana", "avocado"];

let exoticFruits = fruits.slice(); //Копирует(не ссылаемся) массив

exoticFruits.push('durian');

console.log(fruits);
console.log(exoticFruits);

const horror = ['Mizeru', 'Jerald game'],
	adventure = ['superman', 'jumanji'];

*Spread оператор(Оператор развертывания), обозначаеться как три точки "..."
const films = [...horror, ...adventure, "another..."];

console.log(films);


const someNums = [0, 5, 10];

function print(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
print(...someNums);



*Все методы копирования массива
const arr = ['natalia', 'galia', 'bodya'];
*1
for (let key of arr) {
	copyOfArr[key] = arr[key];
}
*2
const copyOfArr = [];
arr.forEach(function (name, key) {
	copyOfArr[key] = arr[key];
});
*3
const copyOfArr = arr.slice();
*4
const copyOfArr = [...arr];

console.log(copyOfArr);

*Все методы копирования обьекта
const obj = {
	name: "galia",
	age: 51,
	workStatus: true
}
*1
 const copyObj = {};
 for (let key in obj) {
	  copyObj[key] = obj[key];
 }
*2
 const copyObj = Object.assign({}, obj);
*3
 const copyObj = { ...obj };

console.log(copyObj);


*Разница между in и of
const arr = ['natalia', 'galia', 'bodya'];

*of выведет ключ
for (let key of arr) {
	console.log(key);
}
*in выведет значение
for (let index in arr) {
	console.log(index);
}


let str = "Hello world!";
let strObject = new String(str);

console.log(str);
*Выведет обьект
console.log(strObject);


*Прототип
//
const human = {
	health: 100,
	name: "unknown",
	strenght: 50,
	punch: function () {
		console.log('u got punched');
	}
};

*Наследщик
const soldier = {
	name: "Steve",
	strenght: 80,
}
*deprecated
// soldier.__proto__ = human;

Object.setPrototypeOf(soldier, soldier)

console.dir(soldier);

*правильный способ
const human = {
	health: 100,
	name: "unknown",
	strenght: 50,
	punch: function () {
		console.log('u got punched');
	}
};

const soldier = Object.create(human);

soldier.punch();


const sedan = {
	engine: "v8",
	fuelConsume: 10,
	color: "unknown",
	model: "unknown",
	startEngine: function () {
		return "brmmmmmm... brrrrrrrrrr";
	},
};

*Метод create() - создает обьект на основе прототипа(родителя)
const lada = Object.create(sedan);

lada.fuelConsume = 5.1;
lada.color = "grey";
lada.model = 21110;
console.log(`Starting engine ${lada.startEngine()}`);


*/

/*

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	writeYourGenres: function () {
		for (let i = 0; i <= 3; i++) {
			personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
		}
	},
	showMyDB: function (param) {
		if (param == false) {
			console.log(personalMovieDB);
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let lastFilm = prompt('Один из последних просмотренных фильмов ?', '');
			if (lastFilm == null && lastFilm == '') {
				i--;
			} else {
				personalMovieDB.movies[lastFilm] = 'da';
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else {
			console.log("Вы киноман");
		}
	}
};

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
		while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i <= 3; i++) {
			personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
				i--;
			}
		}
		*Альтернитивный способ
		for (let i = 0; i < 1; i++) {
			let genres = prompt(`Запишите любимые жанры через запятую`);
			if (genres == null || genres == '') {
				i--;
			} else {
				personalMovieDB.genres = genres.toLowerCase().split(',');
			}

		}

		personalMovieDB.genres.forEach(function (item, key) {
			console.log(`Любимый жанр ${key + 1} - это ${item}`);
		});
	},
	showMyDB: function (param) {
		if (param == false) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function (param) {
		if (!personalMovieDB.privat) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let lastFilm = prompt('Один из последних просмотренных фильмов ?', '');
			if (lastFilm == null && lastFilm == '') {
				i--;
			} else {
				personalMovieDB.movies[lastFilm] = 'da';
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else {
			console.log("Вы киноман");
		}
	}
};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB.genres);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();



*Если при вызове функции в console.log(..someFunction()..),
*	тело функции ничего не возвращает через return, то в консоли после вывода внутреностей, выведеться undefined

personalMovieDB.writeYourGenres();
console.log();



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
				i--;
			}
		}
		personalMovieDB.genres.forEach(function (item, key) {
			console.log(`Любимый жанр ${key + 1} - это ${item}`);
		});
	},
	showMyDB: function (param) {
		if (param == false) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function (param) {
		if (!personalMovieDB.privat) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let lastFilm = prompt('Один из последних просмотренных фильмов ?', '');
			if (lastFilm == null && lastFilm == '') {
				i--;
			} else {
				personalMovieDB.movies[lastFilm] = 'da';
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else {
			console.log("Вы киноман");
		}
	}
};
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();

console.log();

*toString
let num = 23;

1
console.log(typeof (String(num)));

2
console.log(typeof (num + ""));
||
console.log(typeof (`https://www.narutoplanet.ru/pageNumber/${num}`));


//*toNum
let str = '26px';

//1
console.log(typeof (Number(str)));
//2
console.log(typeof (+str));
//3
console.log(parseInt(str, 10));


*toBool

*Примичание
*Такие значения как: Nan, "", null, undefined, 0: всегда выдают false
let num = 24;
let str = "Yes";

//1
console.log(Boolean(str));
if (condition) {
	console.log("true");
}
//2
if (num) { //true
	console.log("true");
}
//3
if (!!num) {
	console.log("true");
}
*/


//*ЗАДАЧИ НА СОБЕСЕДОВАНИЕ

// let x = 5;
// alert(x++);
// //6

// console.log([] + false - null + true);
// //false

// let y = 1;
// let x = y =2;
// alert(x);
// //Ошибку

// console.log([] + 1 + 2);
// //Nan

// alert("1"[0]);
// //Ошибку

// console.log(2 && 1 && null && 0 && undefined);
// //false

// //true

// alert(null || 2 && 3 || 4);
// //true

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b);
// //true

// alert(+"Infinity");
// //infinity

// "Ёжик" > "яблоко"
// //false

// console.log(0 || "" || 2 || undefined || true || false);
// //true

//Работа на ошибки

//1) Разница между инкриментом до и перед
//x++ сначала вернет исходное значение, а потом его прибавит
//++x прибавит и вернет суму

//2) пустой масив [] тоже самое что и "", по этому
// [] + false = "false";


//3) присваивание идет справа на лево
// let y = 1;
//	 	 2	 1
// let x = y = 2;
// alert(x); Вернет 2

//4) [] + 1 + 2;
// [] + 1 == "1"
// "1" + 2 == 12[string]

//5)alert("1"[0]); тоже самое что и let str = "1"; let[0]; вернет первую букву

//6)   console.log(2 && 1 && null && 0 && undefined); //Вернет null
//Логическое &&(И), запинаеться на лжи и возвращает её
//Логическое ИЛИ, запинаеться на правде(true) и возвращает её

//7)
// console.log([] == []); //Массив НИКОГДА не равен другому массиву

//8) Все правильно ))))

//9) Строки МОЖНО сравнивать между собой по символам
//Читаем как б дальше в алфавите чем а
// console.log("а" > "б");