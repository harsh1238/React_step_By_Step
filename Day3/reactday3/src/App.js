import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './Components/ClassBasedComponent';
import FunctionalComponent from './Components/FunctionalBasedComponent';
import UserTable from './Components/UserTable';

const employeeList  = [
  {
    name : "Harsh",
    gender : "Male",
    age :"11",
  },
  {
    name : "Piyush",
    gender : "Male",
    age :"11",
  },
   {
    name : "amar",
    gender : "Male",
    age :"11",
  },
];

function App() {
  return (
    <div className="App">
     <ClassBasedComponent name="Harsh"/>
     <FunctionalComponent employeeList={employeeList}/>
     <UserTable/>
    </div>
  );
}

export default App;
