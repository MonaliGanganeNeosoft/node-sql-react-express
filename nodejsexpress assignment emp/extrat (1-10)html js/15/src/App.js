import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Myclass from './components/Myclass';
import Counter from './components/Counter';
import Events from './components/Events';
import Sum from './components/Sum';
import Person from './components/Person';
function App() {
  const title="Neo Soft Technologies";
  const date=30;
  const latestTechnology=["React","Angular","Node Js"];
  const empData=[
    {"eid":101,"ename":"A","salary":45678,"city":"noida"},
    {"eid":102,"ename":"B","salary":55678,"city":"mumbai"},
    {"eid":103,"ename":"C","salary":65678,"city":"pune"},
    {"eid":104,"ename":"D","salary":75678,"city":"delhi"},
    {"eid":105,"ename":"E","salary":85678,"city":"gurugram"},
    {"eid":106,"ename":"F","salary":95678,"city":"gurugram"}
  ]
  const clickHandler=(data)=>{
    alert(data);
  }
  return (
    <div className="App">
      <h1> Welcome to {title}</h1>
      <p> This is mern stack training</p>
      <ul>
         {latestTechnology.map((lat,ind)=>
          <li key={ind}>{lat}</li>
          )}
      </ul>
      {date>28? 
      <Person name="anuj" age="23" myClick={()=>clickHandler("Sumit")}>
         SUmit Joshi
      </Person> : 'Invalid'}
      <Counter />
      <hr/>
      <Sum />
       {/* Class COmponent Call */}
       {/* <Myclass mytitle={title}/> */}
      {/* <!-- call home --> */}
      <hr/>
      {/* <Home mycourses={latestTechnology} empdata={empData}/> */}
      <hr/>
      <Events />
       </div>
  );
}

export default App;
