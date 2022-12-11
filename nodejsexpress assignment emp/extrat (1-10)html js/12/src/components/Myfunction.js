const Myfunction=(props)=>{
    return(
        <div>
            <h4> My function Component</h4>
            <table border={1}>
        <thead>
            <tr>
               <th> Emp Id</th>
               <th> Name </th>
               <th> Salary</th>
               <th> City</th>
            </tr>
        </thead>
        <tbody>
          {props.myempData.map(emp=>
            <tr>
               <td>{emp.eid}</td>
               <td>{emp.ename}</td>
               <td>{emp.salary}</td>
               <td>{emp.city}</td>
            </tr>)}
        </tbody>
      </table>
   
        </div>
    )
}
export default Myfunction;