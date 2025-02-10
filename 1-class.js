var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.demoMethod = function () {
        console.log('Hello');
    };
    return Sample;
}());
var obj = new Sample();
obj.demoMethod();
