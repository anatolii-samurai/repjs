
// сокращение кода с тернарным оператором ?
let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';



// Password
let userName = prompt("Введите логин","" );
 
if (userName == "Админ"){
  let password = prompt("Введите пароль","");
  if(password == "Я главный"){
    alert("Здравствуйте");
  }else if(password == null || password == "" ) {
    alert("Error!")
  }
}else if(userName == null && userName == "" ) {
  alert("Error!");
}else{
  alert("Я вас незнаю!");
}

// checkAge
function checkAge(age) {
  if (age < 18){
    console.log("you are not allowed");
  }else{
    console.log("you are welcome!");
  }
}
checkAge(2);


// calc
// const add = "+";
// const multi = "*";
// const subctract = "-";
function calc(operation,a,b){
  switch(operation){
    case "add":
    return a + b;
  
    case "multi":
    return a * b;
    case "subctract":
      return a - b;
 }
}
console.log(calc("add",89,2));
console.log(calc("multi",5,2));
console.log(calc("subctract",8,2));

// switch case

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

