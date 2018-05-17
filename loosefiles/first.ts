const something: string = "something"
console.log("blablabla", something);

//tuples
const tuple1:[string, number] = ["mike",70]; // correct
const tuple2:[string, number] = ["mike",70, 50 , "sqdf"]; // also correct, only defined types are checked, no limit on size...
// const tuple3:[string, number] = ["mike","sqdf"]; // error: second arg should be a number!!
