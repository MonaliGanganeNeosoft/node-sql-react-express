var calc=function(){
    return {
        add:function(a,b){
            return (a+b)
        },
        sub:function(a,b){
            return (a-b)
        }
    }
}();
console.log(calc.add(10,5))
 console.log(calc.sub(10,5))