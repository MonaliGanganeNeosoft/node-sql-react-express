class Car
     {
         constructor(speed){
             this.speed=speed;
         }
         acc(){
             this.speed+=60;
         }
         checkspeed(){
             console.log(`The speed is ${this.speed}`)
         }
     }
     const obj=new Car(60);
     obj.checkspeed();
     obj.acc();
     obj.checkspeed();
