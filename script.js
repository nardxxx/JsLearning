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
*/


/* Задание на урок:

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

4) Потренироваться и переписать цикл еще двумя способами*/


// // Код возьмите из предыдущего домашнего задания
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

// const personalMovieDB = {
// 	count: +numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else {
// 	console.log("Вы киноман");
// }

// for (let i = 0; i < 2; i++) {
// 	let lastFilm = prompt('Один из последних просмотренных фильмов ?', '');
// 	if (lastFilm == null && lastFilm == '') {
// 		i--;
// 	} else {
// 		personalMovieDB.movies[lastFilm] = 'da';
// 	}
// }
// console.log(personalMovieDB);
// // personalMovieDB.movies[lastFilm] = rate;

