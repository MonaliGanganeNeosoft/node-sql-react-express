import React,{Component} from 'react';
const WithLoading=(Component,isLoading)=>{
    return class extends Component{
        
        render(){
            console.log(this.props.isLoading)
            return (
                <>
                {!this.props.isLoading?
                <Component {...this.props}/> :
                <p> Hold On! Data is fetching</p>}
                </>
            )
        }
    }
}
export default WithLoading;