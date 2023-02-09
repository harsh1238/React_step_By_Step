import React from 'react';

class AnimalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Animal"
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

export default AnimalComponent;