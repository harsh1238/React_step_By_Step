import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimalComponent from './AnimalComponent';
import BirdComponent from './BirdComponent';
import UserComponent from './UserComponent';
import EmployeeComponent from './EmployeeComponent';
import HomeComponent from '../../HomeComponent';

class LivingThings2 extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Routes>
                    <Route element={<HomeComponent />} exact path="/"></Route>
                    <Route element={<AnimalComponent />} exact path="/animal"></Route>
                    <Route element={<BirdComponent />} exact path="/bird"></Route>
                    <Route element={<UserComponent />} exact path="/user"></Route>
                    <Route element={<EmployeeComponent />} exact path="/employee"></Route>
                </Routes>
            </div>
        );
    }
}

export default LivingThings2;