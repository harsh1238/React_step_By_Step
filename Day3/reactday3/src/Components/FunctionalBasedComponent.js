import React from "react";

const FunctionalComponent  = ({ employeeList }) => {

    return(
        <div>
        <h1> Employee Table using function component </h1>
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
            {employeeList.map((item,index) => (
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
};

export default FunctionalComponent;