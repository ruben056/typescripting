const something: string = "something"
console.log("blablabla", something);

//tuples
const tuple1:[string, number] = ["mike",70]; // correct
const tuple2:[string, number] = ["mike",70, 50 , "sqdf"]; // also correct, only defined types are checked, no limit on size...
// const tuple3:[string, number] = ["mike","sqdf"]; // error: second arg should be a number!!

//string literals:
let myFavouritePet: "dog";
 // myFavouritePet = "cat";  // cat is not assignable to tpe dog


 // enum like behaviour with type aliases and union operators:
type PetSpecies = "dog" | "cat" | "hamster"
class Pet{

  public readonly species: PetSpecies;
  public readonly name: string;

  constructor(species: PetSpecies, name ="Garfield"){
    this.species = species;
    this.name = name;
  }

  public nameCardText() : string{
    return this.name + " the " + this.species;
  }
}

console.log(new Pet("dog", "Wasco").nameCardText());
console.log(new Pet("cat").nameCardText());
//console.log(new Pet("horse", "blackMerry").nameCardText()); //--> error horse not assignable to parameter of type PetSpecies


// booleans:
// let netInitialized: boolean = undefined;
let isTrue: boolean = true;
// console.log("not init bool : ", netInitialized);
console.log("not init bool : ", isTrue);
