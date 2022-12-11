import React, { Component } from 'react'
import Button from './Button';
import '../styles/sum.css';
export class Sum extends Component {
    constructor(props){
        super(props);
        this.state={num1:'',num2:'',sum:''}
    }
    handler=(event)=>{
      const {name,value}=event.target;
      this.setState({[name]:value})
    }
    Add=(event)=>{
        let total=parseInt(this.state.num1)+parseInt(this.state.num2);
        this.setState({sum:total})
    }
    render() {
        return (
            <div>
              <h2 className="heading"> Addition </h2>  
        No1 : <input type="text" name="num1" onChange={this.handler} className="input"/><br/>
        No2 : <input type="text" name="num2" onChange={this.handler} className="input"/><br/>
        <Button label="Addition" action={this.Add} />
        <p className="btn"> The total is {this.state.sum}</p>
            </div>
        )
    }
}

export default Sum
