import React, { Component } from "react";
import { Link, Route, Redirect, Switch, withRouter } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Signin from "./components/Signin";
import Items from "./components/Items";
// import ItemDetails from "./components/ItemDetails";
import CreateItem from "./components/CreateItem";
import Lists from "./components/Lists";
import ListDetails from "./components/ListDetails";
import CreateList from "./components/CreateList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskListContext from "./components/TaskListContext";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import SideNav from "./components/SideNav";

// let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://127.0.0.1:8080/";
// let backendUrl = "http://127.0.0.1:8080/";
let backendUrl = "https://listbuilder-backend.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: "",
      userStatus: "",
      userEmailAddress: "",
      updatedStatus: "",
      updatedEmailAddress: "",
      listTitle: "",
      listImageUrl: "",
      updatedListTitle: "",
      updatedListImageUrl: "",
      itemName: "",
      itemDescription: "",
      itemImageUrl: "",
      isAuthenticated: false,
    };
  }

  // componentDidMount() {
  //   this.getUsersAxios();
  //   console.log(this.users);
  // }

    getUserAxiosById() {
      axios({ 
        method: "GET", 
        url: `${backendUrl}${this.state.userId}`
      }).then(userData =>
        this.setState({ 
          users: userData.data })
      );
    }

  handleSignin = (event) => {
    console.log(this.state.userEmailAddress);
    event.preventDefault()
    axios({
      method: "POST",
      url: `${backendUrl}users/`,
      data: {
        email: this.state.userEmailAddress,
      },
    }).then((userData) =>
      this.setState({
        users: userData.data,
        isAuthenticated: true,
        userId: userData.data[0]._id
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
      this.getUserAxiosById()
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

  createListAxios() {
    console.log(this.state.users[0]._id)
    axios({
      method: "PUT",
      url: `${backendUrl}new-list`,
      data: {
        user: {
          _id: this.state.users[0]._id,
        },
        list: {
          title: this.state.listTitle,
          list_type: "A",
          status: "Active",
          image_url: this.state.listImageUrl
        },
      },
    }).then((newList) => {
      this.props.history.push(`/lists/${newList.data._id}`);
      this.setState((prevState) => ({
        users: [...prevState.users, newList.data]
      }));
    });
  }

  handleListSubmit = (event) => {
    console.log(event.target);
    event.preventDefault();
    this.createListAxios();
  };

  deleteAxiosList = (event) => {
    console.log(event.target)
    console.log(`${backendUrl}delete-list/${this.state.userId}/${event.target.id}`);
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}delete-list/${this.state.userId}/${event.target.id}`,
    }).then((deletedUser) => {
      this.getUserAxiosById()
      this.props.history.push("/");
    });
  };

  createItemAxios() {
    console.log(this.state);
    axios({
      method: "PUT",
      url: `${backendUrl}new-item`,
      data: {
        user: {
          _id: this.state.userId,
        },
        item: {
          item: this.state.itemName,
          item_desc: this.state.itemDescription,
          item_type: "A",
          status: "Active",
          image_url: this.state.itemImageUrl,
        },
      },
    }).then((newItem) => {
      this.props.history.push(`/items/${newItem.data._id}`);
    });
  }

  handleItemSubmit = (event) => {
    console.log(event.target)
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
      this.getUserAxiosById()
      this.props.history.push("/");
    });
  };

  handleChange = (event) => {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>List Builder</h1>
          </Link>
          <Link to="/signin"><button>Sign In</button></Link>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Header
                {...routerProps}
                users={this.state}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
        </header>
        <SideNav />

        {/* <Route path="/profile" component={Profile} /> */}
        <Switch>
          <Route
            exact
            path="/signin"
            render={(routerProps) => (
              <Signin
                {...routerProps}
                users={this.state.users}
                userId={this.state.userId}
                userEmailAddress={this.state.userEmailAddress}
                handleChange={this.handleChange}
                handleSignin={this.handleSignin}
              />
            )}
          />

          {/* Route to view lists component */}
          <Route
            exact
            path="/lists"
            render={(routerProps) => (
              <Lists
                {...routerProps}
                users={this.state.users}
                userId={this.state.userId}
                handleChange={this.handleChange}
                handleListDelete={this.deleteAxiosList}
              />
            )}
          />

          {/* Route to view ListDetails component */}
          <Route
            path="/lists/:id"
            render={(routerProps) => (
              <ListDetails
                {...routerProps}
                users={this.state.users}
                userId={this.state.userId}
                updatedTitle={this.state.updatedTitle}
                updatedImageUrl={this.state.updatedImageUrl}
                handleChange={this.handleChange}
                handleListDelete={this.deleteAxiosList}
                handleUpdateList={this.handleUpdateList}
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
                userId={this.state.userId}
                handleChange={this.handleChange}
                handleUserDelete={this.deleteAxiosUser}
              />
            )}
          />

          {/* Route to view UserDetail component */}
          <Route
            path="/users/:id"
            render={(routerProps) => (
              <UserDetails
                {...routerProps}
                users={this.state.users}
                userId={this.state.userId}
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
