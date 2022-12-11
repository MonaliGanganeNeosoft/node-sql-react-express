interface JsonConvert{
    toJSON():string;
}
class SUmit implements JsonConvert 
{
    constructor(private fname,private lname){

    }
    toJSON():string{
        return JSON.stringify(this)
    }
}
let obj=new SUmit("Sumit","Joshi");
console.log(obj.toJSON())