import React from 'react';

class StockList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.data.map((object, index) => (
                            <tr key={index}>
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockList;