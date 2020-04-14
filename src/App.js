import React from 'react';
// import {Link, 
  // Route, Switch, Redirect, withRouter 
// } from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import TaskListContext from "./components/TaskListContext";

// const backendUrl = "http://localhost:8080/"
// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.getUsersAxios();
  }
  
  getUsersAxios() {
    // axios({ method: "GET", url: backendUrl }).then(userData =>
    //   this.setState({ users: userData.data })
    // );
  }

  render() {
  return (
    <div className="App">
      {/* <Link to="/" className='home-page'>

      </Link> */}
      <Header />
      <TaskListContext>
        <div>
          <TodoForm />
          <TaskList />
        </div>
      </TaskListContext>
      </div>
  );
  }
}
export default App;
