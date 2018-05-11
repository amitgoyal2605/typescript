var person = /** @class */ (function () {
    function person(a) {
        if (a === void 0) { a = 4; }
        this.a = 9;
        this.a = a;
    }
    person.prototype.method = function (name) {
        var z = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            z[_i - 1] = arguments[_i];
        }
        var a = 6;
        //this.a = a;
        console.log(name);
        var x = '5';
        var y = 5;
        if (x === y) {
            console.log('equal');
        }
        for (var i = 0; i < z.length; i++) {
            console.log(z[i]);
        }
        console.log(this.a);
        console.log(a);
        return 3;
    };
    return person;
}());
var a = new person(676);
//a.$name = 'a';
a.method('divyanshu');
a.method('divyanshu', 45, 'sdfs');
console.log(btoa('password'));
var b = new person(345);
