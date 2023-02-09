import logo from './logo.svg';
import './App.css';
import ClassBased from './components/classBased'; 
import Functional from './components/functional';


const employeeList  = [
  {
    name : "Harsh",
    gender : "Male",
    id :"111",
  },
  {
    name : "Piyush",
    gender : "Male",
    id :"112",
  },
];

function App() {
  return (
    <div className="App">
    <ClassBased name="react"/>
    <Functional name="react training functional props"/>
    <Functional employeeList={employeeList}/>
    </div>
  );
}

export default App;
