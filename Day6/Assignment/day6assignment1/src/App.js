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
      name: "Suresh",
    },
    {
      id: 2,
      name: "Mahesh",
    },
  ];

  const taskUserData = [
    {
      id: 1,
      name: "Satish",
      dob: "01-09-1956",
      gender: "male",
    },
    {
      id: 2,
      name: "Raju",
      dob: "01-09-1956",
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
      <br />
      <br />
      <StylingComponent />
    </div>

  );
}

export default App;