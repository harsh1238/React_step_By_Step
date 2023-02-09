import React, { Component } from 'react';
import "./StylinigComponent.css";
import classes from "./StylinigComponent.module.css";

const styles = {
    color: "blue"
}

class StylingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p style={{ color: "red" }}>Element Styling one</p>
                <p className="color-red">Element Styling two </p>
                <p style={styles}>Element Styling three</p>
                <p className={classes.colorMaroon}>Element Styling three </p>
            </div >
        );
    }
}

export default StylingComponent;