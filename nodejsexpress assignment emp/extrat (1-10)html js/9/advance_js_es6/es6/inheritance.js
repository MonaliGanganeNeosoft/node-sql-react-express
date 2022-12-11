class A 
 {
     abc(){
         return "Sumit";
     }
 }
 class B extends A 
 {
     bca(){
         let fname="Amit";
         let pname=super.abc();//Sumit 
         console.log(`${fname} and ${pname} are good friends`)
     }
 }
 const obj=new B;
 obj.bca();
