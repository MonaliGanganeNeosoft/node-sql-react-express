let pro=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(20),2000)
})
pro.then(res=>{
    console.log(res);//20
    return res*2;//40
})
.then(res=>{
    console.log(res);//40
    return res*5;//200
})
.then(res=>{
    console.log(res);//200
})