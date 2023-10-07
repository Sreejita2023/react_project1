import React, { useState } from 'react';
import './productform.css'
function ProductForm(props){
    const [newTitle,setTitle]=useState('')
    const [newDate,setDate]=useState('')
    function titleChangeHandler(event){
        setTitle(event.target.value)
    }
    function dateChangeHandler(event){
        setDate(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault()
        const element={
            title:newTitle,
            date:newDate
        }
        console.log(element)
        props.onSaveProduct(element)
        setTitle('')
        setDate('')
    }
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
            <div className='newproduct_title'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='newproduct_date' >
            <label>Date</label>
            <input type="date" value={newDate} max="2004-01-02"  min="2000-01-02" onChange={dateChangeHandler}/>
        </div>
        <div className='newproduct_button' >
            <button type="submit">Add to product</button>
        </div>
            </form>
        </React.Fragment>
    )
}
export default ProductForm;