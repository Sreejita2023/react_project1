import React,{useState} from "react";

function MyComponent(){
  const[state,setstate]=useState({
      count:0,text:''
  })
  function increment(){
    setstate(
        prevState=>(
            {...prevState,count:prevState.count+1}
        )
    )
  }
  function update(event){
    setstate(prevState=>
        ({...prevState,text:event.target.value}
    )
    )
  }
  return(
    <div>
        <p>count:{state.count}</p>
        <button onClick={increment}>Increment</button>
        <input type="text" value={state.text} onChange={update}/>
        <p>text:{state.text}</p>
    </div>
  )
}
export default MyComponent