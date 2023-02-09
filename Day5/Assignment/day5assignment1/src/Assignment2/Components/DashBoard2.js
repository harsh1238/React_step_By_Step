import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashBoard2 = () => {
    const navigate = useNavigate();
    const handleClick = () => { navigate("/") }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/bird">Bird</Link>
                </li>
                <li>
                    <Link to="/animal">Animal</Link>
                </li>
                <li>
                    <Link to="/employee">Employee</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <button onClick={handleClick}>Home</button>
                </li>
            </ul>
        </nav>
    )
}

export default DashBoard2;