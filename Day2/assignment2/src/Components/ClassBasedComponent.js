import React from "react";

class ClassBasedComponent extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            name : props.employeeList1,
        }; 
    }

    render()
    {
        
        return(
            <div>
       

        <h1> Employee Table using ClassBased component </h1>
        <div className="container">

        <table className="table striped text-left" style={{background: "blue" , color: "white"}}>
        <thead>
            <tr>
                <th> name</th>
                 <th> gender</th>
                  <th> age</th>
            </tr>
        </thead>
        <tbody>
          {this.state.name.map((item,index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                </tr>
            ))} 
        </tbody>
        </table>
        </div>
        </div>
        );
    }
}

export default ClassBasedComponent;