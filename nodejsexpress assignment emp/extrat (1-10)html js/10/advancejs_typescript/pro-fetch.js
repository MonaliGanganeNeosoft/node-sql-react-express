const URL="https://jsonplaceholder.typicode.com/posts";
fetch(URL)
.then(res=> res.json())
.then(data=>{
    console.log(data)
})