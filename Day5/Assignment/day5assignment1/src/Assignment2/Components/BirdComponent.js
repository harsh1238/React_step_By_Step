import React from 'react';

class BirdComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Bird"
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

export default BirdComponent;