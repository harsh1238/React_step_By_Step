import React from "react";

const Functional  = ({ employeeList }) => {

    return(
        <div>
         { /*  <h1> Functional Component </h1>
    <h2> function props - {name} </h2> */}

        <h1> Employee Table </h1>
        <div className="container">
        <table className="table striped text-left" style={{background: "blue" , color: "white"}}>
        <thread>
            <tr>
                <th> name</th>
                 <th> age</th>
                  <th> ID</th>
            </tr>
        </thread>
        <tbody>
            {employeeList.map((item,index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.ID}</td>
                </tr>
            ))}
            
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default Functional;