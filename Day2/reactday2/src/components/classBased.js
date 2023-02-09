import React from "react";

class ClassBased extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            name : "Harsh",
        };
        this.checkBinding = this.checkBinding.bind(this);
    }
    handleClick() {
        this.setState(
            {
                name: "smita",
            }
        )
    }

    checkBinding() 
    {
        console.log("state name", this.state.name);
    }
    
    render() {
        return (
             <div>
              <h3> state name is {this.state.name}</h3>
             <h1> ClassBased component </h1>
             <h2> class props is - {this.props.name} </h2>
             <button onClick={()=> this.handleClick()}>change state </button>
             <button onClick={this.checkBinding} > check binding </button>
             </div>
        );
    }
}

export default ClassBased;