import React from "react";
import PropTypes from "prop-types";

const Dashboard = (props) => {
    return(
        <div>
        <p> {"Name :" + props.name}</p>

        </div>
    );
};

Dashboard.defaultProps  = {
 me : "Harsh",
};

Dashboard.prototype = {
    name: PropTypes.string,
    age:PropTypes.number,
};

export default Dashboard;