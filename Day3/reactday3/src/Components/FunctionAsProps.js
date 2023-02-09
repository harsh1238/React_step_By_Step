import React from "react";

const FunctionAsProps = props => 
{
    const data = [
        {
            name : "Harsh",
            skill: "UI",
            company: "Yash"
        }
    ]
    return(

        <div>
        <button onClick={()=>props.changeNameAsProps(data)}>Function as props</button>
        </div>
    );
}

export default FunctionAsProps;