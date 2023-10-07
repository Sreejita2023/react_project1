import React from 'react';
import './newproduct.css';
import ProductForm from './productform';
  function NewProduct(props){
    function saveProduct(product){
      console.log("i am under a new product")
      console.log(product)
      props.printProduct(product)
    }
     return(
      <div>
        <ProductForm onSaveProduct={saveProduct}/>
      </div>
     )
  }
  export default NewProduct;