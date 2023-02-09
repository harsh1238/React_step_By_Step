import React, { Component } from 'react';

function HOC(HOCComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: data
            }
        }

        render() {
            return (
                <HOCComponent data={this.state.data} {...this.props} />
            )
        }
    }
}

export default HOC;