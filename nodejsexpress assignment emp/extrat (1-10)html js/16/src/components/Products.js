import React, { Component } from 'react'
import data from '../Products.json';
export class Products extends Component {
    constructor(props){
        super(props);
        this.state={proData:[],age:23}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({proData:data.products})
        },2000);
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.age!==prevState.age){
            console.log("Changes")
        }
    }
    abc=()=>{
         this.setState({age:this.state.age+1})
    }
    render() {
        return (
            <div>
                <h2> Products</h2>
                <ul>
                    {this.state.proData.map(pro=>
                    <li>{pro.pname}</li>
                    )}
                </ul>
                <input type="button" value="Update" onClick={this.abc}/>
            </div>
        )
    }
}

export default Products
