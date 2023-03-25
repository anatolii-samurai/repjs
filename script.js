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

