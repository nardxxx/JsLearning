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

*const
*	lastFilm = prompt('Один из последних просмотренных фильмов ?', ''),
*	rate = prompt('На сколько оцените его ?', '');

Данные в обьект передаем через [] из-за поддержки браузеров и кирилиццы.
*personalMovieDB.movies[lastFilm] = rate;

*console.log(personalMovieDB);

*/
