import React,{useState} from 'react'

const UseStateComponent = ({employeeList2}) => 
{
     const [employeeList ] = useState(employeeList2);

     return (

        <div>
       

        <h1> Employee Table using UserState Hook  </h1>
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
}

export default UseStateComponent;
