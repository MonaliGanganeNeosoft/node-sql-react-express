export class Car{
    private speed:number;
   // readonly dob:Date;
    constructor(){
        this.speed=50;
        //this.dob=new Date(1987,09,17);
    }
    acc(){
        this.speed+=70;
    }
    checkspeed(){
     console.log(`The speed is ${this.speed}`);
    }
}
