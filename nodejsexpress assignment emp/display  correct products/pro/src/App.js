import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/posts" element={<Posts/>}/>

        
      </Routes>
    </Router>
    </>
    </div>
  );
}
 
export default App;
