import React from "react";

const EmployeeList = () => {
    const employeeList = ["infosys", "Accenture", "Yash","Cybage"];

    return(
        <ul>
            {
                employeeList.map((item,i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
    );
}

export default EmployeeList;