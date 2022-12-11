"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    // readonly dob:Date;
    function Car() {
        this.speed = 50;
        //this.dob=new Date(1987,09,17);
    }
    Car.prototype.acc = function () {
        this.speed += 70;
    };
    Car.prototype.checkspeed = function () {
        console.log("The speed is " + this.speed);
    };
    return Car;
}());
exports.Car = Car;
