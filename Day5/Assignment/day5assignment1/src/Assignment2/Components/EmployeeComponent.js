import React from 'react';

class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Employee"
        }
    }
    render() {
        return (
            <div>
                This is an {this.state.name} Component form task2!
            </div>
        );
    }
}

export default EmployeeComponent;