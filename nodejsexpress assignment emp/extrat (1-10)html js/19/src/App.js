import logo from './logo.svg';
import './App.css';
import React,{Component}  from 'react';
import Mycounter from './components/Counter';
import Xyz from './components/Xyz';
import WithLoading from './components/hoc/withLoading';
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
    <div>
       {/* <Mycounter /> */}
       <LoadXyz isLoading={this.state.loading}/>
    </div>
  );
  }
}

export default App;
