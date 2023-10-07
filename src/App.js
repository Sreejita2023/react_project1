import React from 'react';
import './App.css';
import Products from './components/products';
import NewProduct from './components/newproduct';
import MyComponent from './components/mycomponent';
const App=()=> {
  const products=[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date:new Date(2021,11,3)
    },
    {
      id:'p2',
      title:'surfexcel',
      amount:120,
      date:new Date(2023,11,3)
    }
  ]
  function printProductData(data){
    console.log("i am inside app .js")
    console.log(data)
  }
  return (
    <React.Fragment>
      <NewProduct printProduct={printProductData}/>
     <Products items={products}/>
     <MyComponent/>
    </React.Fragment>
  );
}

export default App;
