function * iteration(){
    let index=0;
    while(true){
        yield index++;
    }
 }
 let gen=iteration();
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 