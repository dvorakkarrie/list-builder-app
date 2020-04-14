import React from 'react';
import {Link, Route, Switch, Redirect, withRouter} from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskListContext from "./components/TaskListContext";
import Users from "./components/Users";

// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
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
      <header>
        <Link to='/' className='home'><Header /></Link>
      </header>
       <Switch>
          <Route exact path='/'
            render={routerProps => (
              <Users
                users={this.state.users}
              />
            )}
          />

          {/* Route to view EventDetail component */}
          {/* <Route
            path='/event/:id'
            render={routerProps => (
              <EventDetail
                {...routerProps}
                events={this.state.events}
                newItem={this.state.newItem}
                handleItemDelete={this.deleteAxiosItem}
                itemSold={this.itemSold}
              />
            )}
          /> */}

          {/* Route to create a new event (from Home) */}
          {/* <Route
            path='/new-event'
            render={() => (
              <CreateEvent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          /> */}

          {/* Route to create a new event item (on EventDetails component)*/}
          {/* <Route
            path='/new-item'
            render={routerProps => (
              <CreateItem
                {...routerProps}
                handleChange={this.handleChange}
                handleItemSubmit={this.handleItemSubmit}
                id={routerProps.location.pathname}
              />
            )}
          /> */}

           {/* Route to update item (on EventDetails component)*/}
           {/* <Route
            path='/update-item/:eventId/:itemId'
            render={routerProps => (
              <UpdateItem
                {...routerProps}
                handleChange={this.handleChange}
                handleItemUpdate={this.handleItemUpdate}
                allEvents={this.state.events}
                updateItem={this.state}
                id={routerProps.location.pathname}
              />
            )}
          /> */}
          <Route path='/*' render={() => <Redirect to='/event/' />} />
        </Switch>

      <TaskListContext>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </TaskListContext>
      </div>
  );
  }
}
export default withRouter(App);
