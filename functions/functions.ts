
function printName(firstname: string, lastname: string){
  console.log(`${firstname}, ${lastname}`);
}
printName("garfield", "lazycat");
//printName("garfield"); // error parameters are mandatory!


function printName2(firstname: string, lastname?: string){
  console.log(`${firstname}, ${lastname}`);
}
printName2("garfield"); // garfield, undefined


function printName3(firstname: string, lastname = "defaultLastName"){
  console.log(`${firstname}, ${lastname}`);
}
printName3("garfield"); // garfield, defaultLastName


// passing functions:
function executeFunction(doSomething: Function){
  doSomething();
}
executeFunction(()=> console.log("doing something"));

// passing constructors todo doesn't seem to work ...
// function executeConstructor(createSomething: {new()}): any{
//   return new createSomething();
// }
// class Cat{
//   constructor(public name="garfield"){
//   }
//   toString(){
//       console.log(`cat with name ${name}`);
//   }
// }
// executeConstructor(Cat);
