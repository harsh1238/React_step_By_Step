import './App.css';
import Dashboard from './components/Dashboard';
import FormComponent from './components/Formcomponent';
import UserList from './components/UserList';
import StockList from './components/StockList';
import HOC from './components/HOC';
import TaskUserDetails from './components/TaskUserDetails';
import StylingComponent from './components/StylingComponent';

function App() {
  const stockData = [
    {
      id: 1,
      name: "TCS",
    },
    {
      id: 2,
      name: "Yash",
    },
  ];

  const userData = [
    {
      id: 1,
      name: "Harsh",
    },
    {
      id: 2,
      name: "Piyush",
    },
  ];

  const taskUserData = [
    {
      id: 1,
      name: "Harsh",
      dob: "25-09-1007",
      gender: "male",
    },
    {
      id: 2,
      name: "Piyush",
      dob: "03-09-1997",
      gender: "male",
    },
  ];

  const Stocks = HOC(StockList, stockData);
  const Users = HOC(UserList, userData);
  const TaskUser = HOC(TaskUserDetails, taskUserData);

  return (
    <div className="App">
      <FormComponent />
      <Users name="User" />
      <Stocks name="Stock" />
      <TaskUser name="User Details" />
     
      <br />
      <StylingComponent />
    </div>

  );
}

export default App;
