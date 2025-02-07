"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirstClass = /** @class */ (function () {
    function FirstClass() {
    }
    FirstClass.prototype.hello = function () {
        console.log('Hello');
    };
    return FirstClass;
}());
var a = new FirstClass();
a.hello();
