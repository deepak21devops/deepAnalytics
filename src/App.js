import './App.css';
import NavBar from './Components/Navbar/NavBar';
import SideBar from './Components/Sidebar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import AllTaskList from './Pages/AllTaskList/AllTaskList';
import EditTask from './Pages/EditTask/EditTask';
import CreateTask from './Pages/CreateTask/CreateTask';
import CompleteTaskList from './Pages/CompletedTaskList/CompleteTaskList';
import PendingTaskList from './Pages/PendingTaskList/PendingTaskList.jsx';
import CompletedTasksChart from './Pages/CompletedTasksChart/CompletedTasksChart';
import TasksChart from './Pages/allTaskChart/TasksChart';
import PendingTaskChart from './Pages/PendingTaskCharts/PendingTaskChart';

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

          <Route path="/completedlist">
            <CompleteTaskList />
          </Route>

          <Route path="/pendinglist">
            <PendingTaskList />
          </Route>

          <Route path="/alltaskreports">
            <TasksChart />
          </Route>

          <Route path="/completedtaskreports">
            <CompletedTasksChart />
          </Route>

          <Route path="/pendingtaskreports">
            <PendingTaskChart />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
