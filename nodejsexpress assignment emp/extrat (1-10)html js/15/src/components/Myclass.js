import React,{Component} from 'react';
import Button from './Button';
class Myclass extends Component 
{
   constructor(props){
       super(props);
       this.state={name:"anuj",age:34}
   }
   updateData=()=>{
       setTimeout(()=>{
        this.setState({name:"sumit"})
       },4000)
   }
    render(){
        const {name,age}=this.state;
       return(
          <div>
             <h2> Class Component : {this.props.mytitle} </h2>
             <p>The name is {name} and age is {age}</p>
             <Button label="Update Data" action={this.updateData}/>
          </div>
       )
    }
}
export default Myclass;