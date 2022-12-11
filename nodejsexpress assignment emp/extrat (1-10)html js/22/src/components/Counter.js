import React, { Component } from 'react'
import CounterHoc from './hoc/CounterHoc'
export class Counter extends Component {
    render() {
        return (
            <div>
                <p> {this.props.CountNumber}</p>
            <button onClick={this.props.handleClick}>Like</button>
            </div>
        )
    }
}
const Mycounter=CounterHoc(Counter,2);
export default Mycounter;
