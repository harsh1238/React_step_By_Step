import React,{useState} from 'react'

const UseState = ({}) => 
{
     const [count, setCount ] = useState(0);

     return (

        <div>
        <h1> React hooks </h1>
        <h1> you clicked {count} times </h1>
        <button onClick={()=> setCount(count+1)}> Change Count  </button>
        </div>

     );
}

export default UseState;
