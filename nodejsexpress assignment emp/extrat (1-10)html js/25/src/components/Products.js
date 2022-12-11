import React, { Component } from 'react'
import data from '../products.json';
export class Products extends Component {
    constructor(props){
         super(props);
         this.state={proData:[]};
    }
    componentDidMount(){
        this.setState({proData:data.products})
    }
    addCart=(id)=>{
       if(localStorage.getItem('mycart')!=undefined){
          let arr=JSON.parse(localStorage.getItem('mycart'));
          if(arr.includes(id)){
              alert("Product Already added");
          }
          else {
          arr.push(id);
          localStorage.setItem('mycart',JSON.stringify(arr));
          alert("Product Addto Cart");
          }
       }
       else {
           let arr=[];
           arr.push(id);
           localStorage.setItem('mycart',JSON.stringify(arr));
           alert("Product Addto Cart");
       }
    }
    render() {
        return (
            <>
                <h2> Latest Products</h2>
                <div className="row container">
               {this.state.proData.map(pro=>
                 <div className="col-sm-4">
                     <div class="card" >
  <div class="card-body">
    <h5 class="card-title">{pro.pname}</h5>
    <p class="card-text">
        Price : <i>{pro.price}</i><br/>
        Quantity : <i>{pro.quantity}</i><br/>
    </p>
    <button class="btn btn-primary" onClick={()=>this.addCart(pro.id)}>Add Cart</button>
  </div>
</div>
                 </div>
                )}
                </div>
            </>
        )
    }
}

export default Products
