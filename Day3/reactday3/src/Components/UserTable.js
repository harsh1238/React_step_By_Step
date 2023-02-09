import React from "react";
import EmployeeList from "./EmployeeList";
import FunctionAsProps from "./FunctionAsProps";

class UserTable extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            userdata : [
                 {
                name : " Harsh",
                skill : "UI",
                company : " Yash",
            },
             {
                name : " Harshu",
                skill : "Java",
                company : " Yash",
            },
             {
                name : " Piyush",
                skill : "UX",
                company : " Yash",
            },
        ],
            temp : "Bharath",
            isVisible : false,
        };

    }

    changeName = (data) => {
        this.setState({
            userdata : data,
        });
    };

     
        showEmployeeList(){
            this.setState({
                isVisible: true,
            });
        };

 unmountComponent() 
{
 this.setState({
    isVisible: false,
 });
};

    render() {
        return(
        <div>
        <h1> Function as props example  </h1>
        <FunctionAsProps changeNameAsProps={this.changeName}/>
        <div className="container">

        <table className="table striped text-left" style={{background: "blue" , color: "white"}}>
        <thead>
            <tr>
                <th> name</th>
                 <th> skill</th>
                  <th> Company</th>
            </tr>
        </thead>
        <tbody>
            {this.state.userdata.map((item,index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.skill}</td>
                    <td>{item.company}</td>
                </tr>
            ))} 
        </tbody>
        </table>
        </div>

        <hr/>
        <h2> Mounting Example </h2>
            <button onClick={()=> this.showEmployeeList()}> Show employee List</button>
            {this.state.isVisible && <EmployeeList/>}
            <hr/>
            <h2> Unmount component</h2>
            <button onClick={()=> this.unmountComponent()}> Unmount Component</button>
        </div>

       
        
        
    );
};

   
}

export default UserTable;