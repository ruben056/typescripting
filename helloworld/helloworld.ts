class ConsoleGreeter {

  public readonly msgPrefix: string;

  constructor(msgPrefix = "Hello there, "){
    this.msgPrefix = msgPrefix
  }

  public greet(name: string): void{
    console.log(this.msgPrefix + name);
  }
}
new ConsoleGreeter().greet('Dilbert');
new ConsoleGreeter('Howdy ').greet('Dilbert');
