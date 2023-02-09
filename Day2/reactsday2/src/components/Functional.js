import React from "react";

const Functional  = ({ employeeList }) => {

    return(
        <div>
         { /*  <h1> Functional Component </h1>
    <h2> function props - {name} </h2> */}

        <h1> Employee Table </h1>
        <div className="container">

        <table className="table striped text-left" style={{background: "blue" , color: "white"}}>
        <thead>
            <tr>
                <th> name</th>
                 <th> gender</th>
                  <th> ID</th>
            </tr>
        </thead>
        <tbody>
            {employeeList.map((item,index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.id}</td>
                </tr>
            ))}
            
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default Functional;