function Car()
  {
      this.speed=50;
  }
Car.prototype.acc=function(){
    this.speed+=60;
}
Car.prototype.checkspeed=function(){
    console.log("The speed is "+this.speed);
}
var obj=new Car();
obj.checkspeed();
obj.acc();
obj.acc();
obj.checkspeed();
