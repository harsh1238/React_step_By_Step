import React from 'react';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "User"
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

export default UserComponent;