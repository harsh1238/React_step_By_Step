import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardComponent = () => {
    const navigate = useNavigate();
    const handleClick = () => { navigate("/") }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <button onClick={handleClick}>Bye</button>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardComponent;