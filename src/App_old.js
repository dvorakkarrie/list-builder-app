import React, {Component} from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import axios from 'axios';

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskListContext from "./components/TaskListContext";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import List from "./components/List";
import CreateList from "./components/CreateList";

// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/";
let backendUrl = "http://localhost:8080/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: '',
      userPassword: '',
      userStatus: '',
      userFirstName: '',
      userLastName: '',
      userEmailAddress: '',
      userPhotoUrl: '',
      updatedUserFirstName: '',
      updatedUserLastName: '',
      lists: [],
      isLoggedIn: true
    }
  }

  componentDidMount() {
    this.loadAuth();
    this.getUsersAxios();
    console.log(this.users)
  }

  loadAuth () {
    const {loading} = useAuth0();
    if(loading){
      return <div>Loading...</div>;
    }
  }
  
  createUserAxios() {
    axios({
      method: "POST",
      url: `${backendUrl}users`,
      data: {
        user_id: this.state.userId,
        pwd: this.state.password,
        status: this.state.userStatus,
        first_name: this.state.userFirstName,
        last_name: this.state.userLastName,
        email_address: this.state.userEmailAddress,
        photo_url: this.state.userPhotoUrl
      }
    }).then(newUser => {
      this.props.history.push(`/users/${newUser.data._id}`);
      this.setState(prevState => ({
        users: [...prevState.users, newUser.data]
      }));
    });
  }

  handleUserSubmit = event => {
    event.preventDefault();
    this.createUserAxios();
  };

  getUsersAxios() {
    axios({ 
      method: "GET", 
      url: `${backendUrl}users/`
    }).then(userData =>
      this.setState({ 
        users: userData.data })
    );
  }

  deleteAxiosUser = event => {
    console.log(`${backendUrl}users/${event.target.id}`)
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}users/${event.target.id}`
    }).then(deletedUser => {
      this.getUserAxios();
      this.props.history.push("/")
    });
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

  deleteAxiosList = event => {
    // console.log(`${backendUrl}list/${event.target.id}`)
    // event.preventDefault();
    // axios({
    //   method: "DELETE",
    //   url: `${backendUrl}list/${event.target.id}`
    // }).then(deletedUser => {
      this.getUserAxios();
    // });
  };

  handleListSubmit = event => {
    event.preventDefault();
    this.createListAxios();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
  
  }

  render() {
    console.log(this.state.users)
  return (
    <div className="App">
      <header><Header /></header>
       <Switch>
        <Route exact path="/" render={routerProps => (
            <Home 
              {...routerProps}
              users={this.state.users}
              handleLogin={this.handleLogin}
            />
          )}
        />

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

          {/* Route to create a new user (from Home) */}
          <Route path='/new-user'
            render={routerProps => (
              <CreateUser
                {...routerProps}
                users={this.state.users}
                lists={this.state.lists}
                items={this.state.items}
                userId={this.state.newUserId}
                userStatus={this.state.userStatus}
                userFirstName={this.state.newUserFirstName}
                userLastName={this.state.newUserLastName}
                userEmailAddress={this.state.newEmailAddress}
                userPhotoUrl={this.state.userPhotoUrl}
                handleChange={this.handleChange}
                handleUserSubmit={this.handleUserSubmit}
              />
            )}
          />

          {/* Route to view UserDetail component */}
          <Route path="/users/:id" render={routerProps => (
            <UserDetails
            {...routerProps}
                {...routerProps}
                users={this.state.users}
                // userId={this.state.newUserId}
                // userStatus={this.state.userStatus}
                // userFirstName={this.state.newUserFirstName}
                // userLastName={this.state.newUserLastName}
                // userEmailAddress={this.state.newEmailAddress}
                // userPhotoUrl={this.state.userPhotoUrl}
                handleChange={this.handleChange}
                handleUserDelete={this.deleteAxiosUser}
                handleUpdateUser={this.handleUpdatedUser}
              />
            )}
          />


         {/* Route to view lists component */}
         <Route exact path='/lists'
            render={routerProps => (
              <List
                {...routerProps}
                lists={this.state.lists}
                handleChange={this.handleChange} 
                handleListDelete={this.deleteAxiosList}
              />
            )}
          />

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
