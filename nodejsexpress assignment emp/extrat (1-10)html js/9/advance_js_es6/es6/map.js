
        let arr=[2,3,4,5];
        let newArray=arr.map(val=> val*2);//4 6 8 10 
      console.log(newArray);
       const tasks=[
         {
           "name":"Task1",
           "duration":120
         },
          {
           "name":"Task2",
           "duration":70
         },
          {
           "name":"Task3",
           "duration":80
         }
       ]
  const task_names=tasks.map((task)=>{
    return task.name;
  })
  console.log(task_names)
  const mytasks=tasks.filter((task)=> task.duration>=80)
  console.log(mytasks)
  let arr1=[1,2,3,4,5];
  const total=arr1.reduce((prev,current)=>{
    console.log(prev+"---"+current)
      return prev+current;
  },0)
  console.log(total)