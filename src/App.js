import './App.css';
import NavBar from './Components/Navbar/NavBar';
import SideBar from './Components/Sidebar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import AllTaskList from './Pages/AllTaskList/AllTaskList';
import EditTask from './Pages/EditTask/EditTask';
import CreateTask from './Pages/CreateTask/CreateTask';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/mytasks">
            <AllTaskList />
          </Route>

          <Route path="/edit">
            <EditTask />
          </Route>

          <Route path="/newtask">
            <CreateTask />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
