import React from 'react';
import './products.css';
import Card from './card';
import Productitem from './productitem';
const Products=(props)=>{
    return(
        <Card className='products'>
           <Productitem
             title={props.items[0].title}
             amount={props.items[0].amount}
             date={props.items[0].date}
           />
           <Productitem
             title={props.items[1].title}
             amount={props.items[1].amount}
             date={props.items[1].date}
           />

        </Card>
    )
}

export default Products;