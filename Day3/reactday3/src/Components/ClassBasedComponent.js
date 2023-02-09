import React from "react";

class ClassBasedComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        };

        this.basestate = this.state ;
        this.increamemnt=this.increamemnt.bind(this)
    }


    reset()
    {
        this.setState( this.basestate)
    }
    increamemnt()
    {
        this.setState({
            counter : this.state.counter+1
        })
    }

    decreament()
    {
        this.setState({
            counter : this.state.counter -1
        })
    }
    render()
    {
        return(
            <div>
                <h2> {this.props.name} you are in class Based statefull Component</h2>
                <span>{this.state.counter}</span>
                <button onClick={this.increamemnt}>increament counter</button>
                 <button onClick={this.decreament.bind(this)}>decreament counter</button>
                 <button onClick={()=>this.reset()}> Reset</button>
            </div>
        );
    }
}

export default ClassBasedComponent;