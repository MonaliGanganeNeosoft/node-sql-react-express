import React,{Component} from 'react';
import Button from './Button';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0,isLoggedIn:true}
    }
    updateCounter=()=>{
       this.setState(
             {count:this.state.count+1})
    }
    render(){
        let {isLoggedIn}=this.state;
        // const authButton=()=>{
        //     if(isLoggedIn){
        //         return <button>Logout</button>
        //     }
        //     else {
        //         return <button>Login</button>
        //     }
        // }
        return(
            <div>
                {/* {authButton()} */}
                {isLoggedIn? <button>Logout</button>: <button>Login</button>}
                <h2 style={{textAlign:"center",textDecoration:"underline"}}> Counter</h2>
                <p> The counter is {this.state.count}</p>
                <Button action={this.updateCounter} label="Counter"/>
            </div>
        )
    }
}
export default Counter;