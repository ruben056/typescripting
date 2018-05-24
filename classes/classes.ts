//1. extending string with a new function:

//1.1 declare of name of function:
interface String{
  toQsdf():string;
}
// 1.2 implement
String.prototype.toQsdf = function() : string {
  return "toQsdf";
}
// 1.3 now wa can do:
console.log("arandomstring".toQsdf());


// 2. class decorators
function addMetaData(target: any){

  target.__metaInfo = {
    "privacyinfo": "ok",
    "credit" : "nok"
  }
  return target;
}
function getMetadataFromClass(target: any) {
  return target.__metaInfo;
}

@addMetaData
class Person{
  constructor(public name: string){}
}

console.log(getMetadataFromClass(Person));


//2. to pass arguments to decorator, need to wrap the decorator in a another
// function, which returns the decorator function....

function addMetaData2(guid: any){
  return function(target: any){
    target.__metaInfo =
    {...{
      "privacyinfo": "ok",
      "credit" : "nok"
      }, ...guid};
    return target;
  }
}

@addMetaData2( {guid: "sqdf-qsdf-qsdf-1235-qsdf"} )
class Person2{
  constructor(public name: string){}
}

console.log(getMetadataFromClass(Person2));
