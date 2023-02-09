import './App.css';
import DashBoard1 from './Assignment1/Components/DashBoard1';
import LivingThings1 from './Assignment1/Components/LivingThings';
import DashBoard2 from './Assignment2/Components/DashBoard2';
import LivingThings2 from './Assignment2/Components/LivingThings';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import UsersComponent from './UserComponent';
import AboutUsComponent from './AboutUsComponent';
import NomatchComponent from './NoMatchComponent';



function App() {
  return (
    <div className="App">
      {/* <DashboardComponent /> */}
      <div>
        <Routes>
          <Route element={<HomeComponent />} exact path="/"></Route>
          <Route element={<UsersComponent />} exact path="/users"></Route>
          <Route element={<AboutUsComponent />} exact path="/about"></Route>
          <Route element={<NomatchComponent />} exact path="/*"></Route>
        </Routes> *

       
        <p>Showing element using use state component</p>
        <DashBoard1/>
        <LivingThings1/>
        <br />
        <p>Showing element using Class stateful component</p>
        <DashBoard2 />
        <LivingThings2/>
      </div>
    </div>
  );
}

export default App;