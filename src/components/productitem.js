import React , {useState} from 'react';


import './productitem.css';
import Card from './card';
import Productdate from './productdate';
const Productitem=(props)=>{
   
   
  const [title, setTitle] =  useState(props.title);

   
   function clickHandler(){
      console.log("it's work")
   }
   return(
     <Card className='product-item'>
        <Productdate
        date={props.date}/>
        <div className='product-item__description'>
            <h2>{title}</h2>
        </div>
        <button onClick={()=>setTitle("popcorn")}> Click to cart</button>
     </Card>
   )
}
export default Productitem;
