import React, { Component } from "react";
import { Link, Route, Redirect, Switch, withRouter } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";

import "./App.css";

import Home from "./components/Home_auth";
import CreateItem from "./components/CreateItem";
import Items from "./components/Items";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskListContext from "./components/TaskListContext";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import Lists from "./components/Lists";
import CreateList from "./components/CreateList";
import Profile from "./components/Profile";
import SideNav from "./components/SideNav";

// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://127.0.0.1:8080/";
// let backendUrl = "http://127.0.0.1:8080/";
let backendUrl = "https://listbuilder-backend.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: '5e9630ad911dc0000c6fd2d5',
      userStatus: "",
      userEmailAddress: "",
      updatedStatus: "",
      updatedEmailAddress: "",
      lists: [],
      listTitle: "",
      listType: "",
      listStatus: "",
      listImageUrl: "",
      itemName: "",
      itemDescription: "",
      itemImageUrl: "",
      isLoggedIn: true,
    };
  }

  componentDidMount() {
    this.getUsersAxios();
    console.log(this.users);
  }

  createUserAxios() {
    console.log(this.state.userEmailAddress)
    axios({
      method: "POST",
      url: `${backendUrl}users`,
      data: {
        email: this.state.userEmailAddress,
      },
    }).then((newUser) => {
      this.props.history.push(`/users/${newUser.data._id}`);
      this.setState((prevState) => ({
        users: [...prevState.users, newUser.data],
      }));
    });
  }

  handleUserSubmit = (event) => {
    event.preventDefault();
    this.createUserAxios();
  };

  getUsersAxios() {
    axios({
      method: "GET",
      url: `${backendUrl}`,
    }).then((userData) =>
      this.setState({
        users: userData.data[0],
      })
    );
  }

  deleteAxiosUser = (event) => {
    console.log(`${backendUrl}${event.target.id}`);
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}${event.target.id}`,
    }).then((deletedUser) => {
      this.getUsersAxios();
      this.props.history.push("/");
    });
  };

  putUserAxios = (event) => {
    axios({
      method: "PUT",
      url: `${backendUrl}users/${event.target.id}`,
      data: {
        status: this.state.updatedStatus,
        email_address: this.state.updatedEmailAddress,
      },
    }).then((user) => {
      this.getUsersAxios();
      this.props.history.push("/");
      // this.props.history.push(`/users/${user.data._id}`);
      // this.setState(prevState => ({
      //   users: [...prevState.users, user.data]
      // }));
    });
  };

  handleUpdateUser = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.putUserAxios(event);
    this.setState({
      updatedEmailAddress: "",
    });
  };

  createListAxios () {
    axios({
      method: "PUT",
      url: `${backendUrl}new-list`,
      data: {
        user: {
          _id: this.state.userId,
        },
        list: {
          title: this.state.listTitle,
          list_type: 'A',
          status: 'Active',
          image_url: this.state.listImageUrl
        }
      },
    }).then((newList) => {
      this.getUsersAxios();
      this.props.history.push(`/lists/${newList.data._id}`);
    });
  }

  handleListSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    this.createListAxios();
  };

  deleteAxiosList = (event) => {
    console.log(`${backendUrl}lists/${event.target.id}`);
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}lists/${event.target.id}`,
    }).then((deletedUser) => {
      this.getUsersAxios();
      this.props.history.push("/");
    });
  };

  createItemAxios () {
    console.log(this.state)
    axios({
      method: "PUT",
      url: `${backendUrl}new-item`,
      data: {
        user: {
          _id: this.state.userId
        },
        item: {
          item: this.state.itemName,
          item_desc: this.state.itemDescription,
          item_type: 'A',
          status: 'Active',
          image_url: this.state.itemImageUrl
        }
      },
    }).then((newItem) => {
      this.getUsersAxios();
      this.props.history.push(`/items/${newItem.data._id}`);
    });
  }

  handleItemSubmit = (event) => {
    event.preventDefault();
    this.createItemAxios();
  };

  deleteAxiosItem = (event) => {
    console.log(`${backendUrl}items/${event.target.id}`);
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}items/${event.target.id}`,
    }).then((deletedUser) => {
      this.getUsersAxios();
      this.props.history.push("/");
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>List Builder</h1>
          </Link>
          <Route exact path="/" render={(routerProps) => <Home />} />
        </header>
        <SideNav />

        <Route path="/profile" component={Profile} />
        <Switch>

          {/* Route to view lists component */}
          <Route
            exact
            path="/lists"
            render={(routerProps) => (
              <Lists
                {...routerProps}
                users={this.state.users}
                lists={this.state.lists}
                handleChange={this.handleChange}
                handleListDelete={this.deleteAxiosList}
              />
            )}
          />

          {/* Route to create a new list (from UserDetails component)*/}
          <Route
            path="/new-list"
            render={(routerProps) => (
              <CreateList
                {...routerProps}
                users={this.state.users}
                handleChange={this.handleChange}
                handleListSubmit={this.handleListSubmit}
                id={routerProps.location.pathname}
              />
            )}
          />          
          
          {/* Route to view items component */}
          <Route
            exact
            path="/items"
            render={(routerProps) => (
              <Items
                {...routerProps}
                users={this.state.users}
                items={this.state.items}
                handleChange={this.handleChange}
                handleItemDelete={this.deleteAxiosItem}
              />
            )}
          />

          {/* Route to create a new item*/}
          <Route
            path="/new-item"
            render={(routerProps) => (
              <CreateItem
                {...routerProps}
                users={this.state.users}
                handleChange={this.handleChange}
                handleItemSubmit={this.handleItemSubmit}
                id={routerProps.location.pathname}
              />
            )}
          />     

          {/* Route to view users component */}
          <Route
            exact
            path="/users"
            render={(routerProps) => (
              <Users
                {...routerProps}
                users={this.state.users}
                handleChange={this.handleChange}
                handleUserDelete={this.deleteAxiosUser}
              />
            )}
          />

          {/* Route to create a new user (from Home) */}
          <Route
            path="/new-user"
            render={(routerProps) => (
              <CreateUser
                {...routerProps}
                users={this.state.users}
                userEmailAddress={this.state.userEmailAddress}
                handleChange={this.handleChange}
                handleUserSubmit={this.handleUserSubmit}
              />
            )}
          />

          {/* Route to view UserDetail component */}
          <Route
            path="/users/:id"
            render={(routerProps) => (
              <UserDetails
                {...routerProps}
                {...routerProps}
                userId={this.state.userId}
                // users={this.state.users}
                updatedStatus={this.state.updatedStatus}
                updatedEmailAddress={this.state.updatedEmailAddress}
                handleChange={this.handleChange}
                handleUserDelete={this.deleteAxiosUser}
                handleUpdateUser={this.handleUpdateUser}
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

          <Route
            exact
            path="/tasks"
            render={(routerProps) => (
              <TaskListContext>
                <div>
                  <TodoForm />
                  <TodoList />
                </div>
              </TaskListContext>
            )}
          />

          <Route path="/*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
