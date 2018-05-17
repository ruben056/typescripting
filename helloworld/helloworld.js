var ConsoleGreeter = /** @class */ (function () {
    function ConsoleGreeter(msgPrefix) {
        if (msgPrefix === void 0) { msgPrefix = "Hello there, "; }
        this.msgPrefix = msgPrefix;
    }
    ConsoleGreeter.prototype.greet = function (name) {
        console.log(this.msgPrefix + name);
    };
    return ConsoleGreeter;
}());
new ConsoleGreeter().greet('Dilbert');
new ConsoleGreeter('Howdy').greet('Dilbert');
