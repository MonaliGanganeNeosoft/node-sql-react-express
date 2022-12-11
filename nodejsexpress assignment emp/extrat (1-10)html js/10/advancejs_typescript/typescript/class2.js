var SUmit = /** @class */ (function () {
    function SUmit(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    SUmit.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return SUmit;
}());
var obj = new SUmit("Sumit", "Joshi");
console.log(obj.toJSON());
