import React from 'react';
import {Link, Route, Switch, Redirect, withRouter} from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskListContext from "./components/TaskListContext";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import CreateList from "./components/CreateList";

// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updatedUserFirstName: '',
      updatedUserLastName: ''
    }
  }

  componentDidMount() {
    this.getUsersAxios();
  }
  
  createUserAxios() {
    // event.preventDefault();
    // axios({
    //   method: "POST",
    //   url: `${backendUrl}new-user`,
    //   data: {
    //     users: {
    //       first_name: this.state.userFirstName,
    //       last_name: this.state.userLastName,
    //       lists: [],
    //       items: []
    //     }
    //   }
    // }).then(newUser => {
    //   this.props.history.push(`/user/${newUser.data._id}`);
    //   this.setState(prevState => ({
    //     users: [...prevState.users, newUser.data]
    //   }));
    // });
  }

  getUsersAxios() {
    // axios({ method: "GET", url: backendUrl }).then(userData =>
    //   this.setState({ users: userData.data })
    // );
  }

  deleteAxiosUser = event => {
    // console.log(`${backendUrl}user/${event.target.id}`)
    // event.preventDefault();
    // axios({
    //   method: "DELETE",
    //   url: `${backendUrl}user/${event.target.id}`
    // }).then(deletedUser => {
      this.getUserAxios();
    // });
  };

  putUserAxios = event => {
    // axios({
    //   method: "PUT",
    //   url: `${backendUrl}user/${event.target.id}`,
    //   data: {
    //     users: {
    //       first_name: this.state.userFirstName,
    //       last_name: this.state.userLastName,
    //       lists: [],
    //       items: []
    //     }}
    //   }).then(newUser => {
    //   this.props.history.push(`/user/${user.data._id}`);
    //   this.setState(prevState => ({
    //     users: [...prevState.users, user.data]
    //   }));
    // });
  }

  handleUpdateUser = event => {
    event.preventDefault()
    this.putUserAxios(event)
    this.setState({
      updatedUserFirstName: '',
      updatedUserLastName: ''
    })
  }

  createListAxios() {
    // let userId = this.props.location.pathname.slice(10);
    // axios({
    //   method: "PUT",
    //   url: `${backendUrl}new-list`,
    //   data: {
    //     user: {
    //       _id: userId
    //     },
    //     item: {
    //       list: this.state.listName,
    //       listDescription: this.state.listDescription,
    //       quantity: this.state.listQuantity,
    //       image: this.state.listImageUrl,
    //       status: this.state.listStatus
    //     }
    //   }
    // }).then(newList => {
    //   this.getUsersAxios();
    //   this.props.history.push(`/user/${userId}`);
    // });
  }

  handleListSubmit = event => {
    event.preventDefault();
    this.createListAxios();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <header>
        <Link to='/' className='home'><Header /></Link>
      </header>
       <Switch>
         {/* Route to view users component */}
          <Route exact path='/users'
            render={routerProps => (
              <Users
                {...routerProps}
                users={this.state.users}
                handleChange={this.handleChange} 
                handleUserDelete={this.deleteAxiosUser}
              />
            )}
          />

          {/* Route to view UserDetail component */}
          <Route path='/user/:id'
            render={routerProps => (
              <UserDetails
                {...routerProps}
                users={this.state.users}
                newList={this.state.newList}
                handleUpdateUser={this.handleUpdatedUser}
                handleListDelete={this.deleteAxiosList}
              />
            )}
          />

          {/* Route to create a new user (from Home) */}
          <Route path='/new-user'
            render={() => (
              <CreateUser
                handleChange={this.handleChange}
                handleSubmit={this.createUserAxios} 
              />
            )}
          />

         {/* Route to view lists component */}
         {/* <Route exact path='/lists'
            render={routerProps => (
              <Lists
                {...routerProps}
                lists={this.state.lists}
                handleChange={this.handleChange} 
                handleListDelete={this.deleteAxiosList}
              />
            )}
          /> */}

          {/* Route to create a new list (from UserDetails component)*/}
          <Route path='/new-list'
            render={routerProps => (
              <CreateList
                {...routerProps}
                handleChange={this.handleChange}
                handleListSubmit={this.handleListSubmit}
                id={routerProps.location.pathname}
              />
            )}
          />

           {/* Route to update a list (from UserDetails component)*/}
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

          <Route path='/*' render={() => <Redirect to='/' />} />
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
