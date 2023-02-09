import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import FormComponent from './Components/FormComponent';
import HOC from './Components/HOC/HOC';
import StockList from './Components/HOC/StockList';
import UserList from './Components/HOC/UserList';

function App() {

  const StockData = [
    {
      id:1,
      name: "TCS",
    },
    {
      id:1,
      name: "TCS",
    },
    {
      id:1,
      name: "TCS",
    },
  ];
  const UserData = [
    {
      id:1,
      name: "TCS",
    },
    {
      id:1,
      name: "TCS",
    },
    {
      id:1,
      name: "TCS",
    },
    
  ];
const Stocks = HOC(StockList,StockData);

const Users = HOC(UserList,UserData);

  return (
    <div className="App">
     <Dashboard name="harsh" age={20}/>
     <FormComponent/>
     <Users name="Users"></Users>
     <br/>
     <Stocks name="Stocks"></Stocks>
    </div>
  );
}

export default App;
