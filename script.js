// let officialName = prompt("Какое 'официальное' название JavaScript?","" );

// if(officialName == "ECMAScript") {
//   alert("Верно!");
// }else{
//   alert("Не знаете? ECMAScript");
// }

// let num = prompt("Введите число","" );

// if(num > 0) {
//   alert(1);
// }else if(num<0){
//   alert(-1);
// }else{
//   alert(0);
// }

// let a = 2,b = 1;
// let result = (a + b <4) ? "Мало" : "Много";
// console.log(result);



// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина':
// '';
// let age = prompt("Number","");
// if (age <= 14 && age >= 90){
//   alert("Right");
// }else{
//   alert("You are so young");
// }
// let userName = prompt("Введите логин","" );
 
// if (userName == "Админ"){
//   let password = prompt("Введите пароль","");
//   if(password == "Я главный"){
//     alert("Здравствуйте");
//   }else if(password == null || password == "" ) {
//     alert("Error!")
//   }
// }else if(userName == null && userName == "" ) {
//   alert("Error!");
// }else{
//   alert("Я вас незнаю!");
// }


// }else if(num<0){
//   alert(-1);
// }else{
//   alert(0);
// }
// function checkAge(age) {
//   if (age < 18){
//     console.log("you are not allowed");
//   }else{
//     console.log("you are welcome!");
//   }
// }
// checkAge(2);

// function sum(a, b) { 
// 	return a + b; 
// }
// let result = sum(1, 2);
// console.log(result);

// const add = "+";
// const multi = "*";
// const subctract = "-";
// function calc(operation,a,b){
//   switch(operation){
//     case "add":
//     return a + b;
  
//     case "multi":
//     return a * b;
//     case "subctract":
//       return a - b;
//  }
// }
// console.log(calc("add",89,2));
// console.log(calc("multi",5,2));
// console.log(calc("subctract",8,2));

  let number = +prompt('Введите число между 0 и 3','');
  switch(number){
  case  0: 
  alert('Вы ввели число 0');
  break;
  case 1:
  alert('Вы ввели число 1');
  break;
  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
}
// let a = prompt("number","");

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }
