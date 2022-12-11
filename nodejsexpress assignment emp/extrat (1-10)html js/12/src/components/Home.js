import Myfunction from "./Myfunction";
const Home=(props)=>{
    return(
        <div>
           <h2> Home Component </h2>
           <ul>
        {props.mycourses.map(latest=>
           <li> {latest}</li>
          )}
      </ul>
           <Myfunction myempData={props.empdata}/>
        </div>
    )
}
export default Home;