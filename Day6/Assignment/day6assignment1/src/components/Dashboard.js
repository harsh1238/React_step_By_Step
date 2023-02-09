import React from 'react';
import Proptypes from 'prop-types';

const Dashboard = (props) => {
    Dashboard.defaultProps = {
        name: "Harsh"
    }

    Dashboard.propTypes = {
        name: Proptypes.string,
        age: Proptypes.number
    }
    return (
        <h2>Name: {props.name}</h2>
    );

}

export default Dashboard;