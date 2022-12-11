import React, { Component } from 'react'

export class Xyz extends Component {
    state={age:''}
     updateAge(event){
         this.setState({
             age:event.target.value
         })
         console.log(this.state.age)
     }
    render() {
        return (
            <div>
                <h2> Data Loaded </h2>
            <input type="text" onChange={event=>this.updateAge(event)} value={this.state.age}/>
            </div>
        )
    }
}

export default Xyz
