import logo from './logo.svg';
import './App.css';
import React,{Component}  from 'react';
import Mycounter from './components/Counter';
import Xyz from './components/Xyz';
import WithLoading from './components/hoc/withLoading';
import button from './components/button';
import Login from './components/Login';
const LoadXyz=WithLoading(Xyz);
class App extends Component{
  constructor(props){
    super(props);
       this.state={loading:false};
  }
  componentDidMount(){
    this.setState({loading:true})
     setTimeout(()=>{
         this.setState({loading:false})
     },4000)
  }
  render(){
  return (
    <>
      <Login />
      <h1> Demo Projects </h1>
       <LoadXyz isLoading={this.state.loading}/>
       <Mycounter />
     </>
  );
  }
}

export default App;
