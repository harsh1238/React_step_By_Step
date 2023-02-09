import React, { useState } from 'react';

const EmployeeComponent = ({ }) => {
    const [name] = useState("Employee");
    return (
        <div>
            This is an {name} Component!
        </div>
    );
}

export default EmployeeComponent;