import React from 'react';
import './AboutUsComponent.css';
import styled from "styled-components";

const pstyle2 = {
    color: "red"
}

// npm i styled-components
const ParaStyle = styled.p`
    color: "red"
`;

const AboutUsComponent = () => {
    return (
        <div>
            <h1>Aboutus Component</h1>
            <p style={{ color: "red" }}>Hello this is type one styling!</p>
            <p style={pstyle2}>Hello this is type two styling!</p>
            <ParaStyle style={pstyle2}>Hello this is type three styling!</ParaStyle>
            <p style={pstyle2}>Hello this is type four styling!</p>
        </div >
    )
}

export default AboutUsComponent;