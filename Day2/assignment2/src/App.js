import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassBasedComponent from './Components/ClassBasedComponent';
import UseStateComponent from './Components/UseStateComponent';



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
    <h1> Welcome </h1>
    <FunctionalComponent employeeList={employeeList}/>
    <ClassBasedComponent employeeList1={employeeList}/>
    <UseStateComponent  employeeList2={employeeList}/>
    </div>
  );
}

export default App;
