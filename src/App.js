import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";

import "./App.css";

import CreateItem from "./components/CreateItem";
import CreateList from "./components/CreateList";
import CreateListItem from "./components/CreateListItem";
import Header from "./components/Header";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import Lists from "./components/Lists";
import ListDetails from "./components/ListDetails";
import Signin from "./components/Signin";
import SideNav from "./components/SideNav";
import TaskListContext from "./components/TaskListContext";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";

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
      listTitle: "",
      listImageUrl: "",
      updatedListTitle: "",
      updatedListImageUrl: "",
      itemName: "",
      itemDescription: "",
      itemStatus: true,
      itemImageUrl: "",
      isAuthenticated: false,
    };
  }

  getUserAxiosById() {
    axios({
      method: "GET",
      url: `${backendUrl}${this.state.userId}`,
    }).then((userData) =>
      this.setState({
        users: userData.data,
      })
    );
  }

  handleSignin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${backendUrl}users/`,
      data: {
        email: this.state.userEmailAddress,
      },
    }).then((userData) => {
      this.setState({
        users: userData.data,
        isAuthenticated: true,
        userId: userData.data[0]._id,
      });
      this.props.history.push("/");
    });
  };

  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
    });
    this.props.history.push("/");
  };

  createListAxios() {
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
          status: "A",
          image_url: this.state.listImageUrl,
        },
      },
    }).then((newList) => {
      this.getUserAxiosById();
      this.props.history.push(`/lists/${newList.data._id}`);
    });
  }

  handleListSubmit = (event) => {
    event.preventDefault();
    this.createListAxios();
  };

  putListAxios = (event) => {
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${backendUrl}lists/${event.target.id}`,
      data: {
        title: this.state.updatedListTitle,
        list_type: "1",
        status: "A",
        image_url: this.state.updatedListImageUrl,
      },
    }).then((user) => {
      this.props.history.push("/lists");
      this.getUserAxiosById();
    });
  };

  handleUpdateList = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.putListAxios(event);
  };

  deleteAxiosList = (event) => {
    console.log(
      `${backendUrl}delete-list/${this.state.userId}/${event.target.id}`
    );
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}delete-list/${this.state.userId}/${event.target.id}`,
    }).then((deletedUser) => {
      this.getUserAxiosById();
      this.props.history.push("/lists");
    });
  };

  createListItemAxios = (event) => {
    let listId = this.props.location.pathname.slice(14);
    axios({
      method: "PUT",
      url: `${backendUrl}new-list-item`,
      data: {
        user: {
          _id: this.state.users[0]._id,
        },
        list: {
          _id: listId,
        },
        item: {
          item: this.state.itemName,
          item_desc: this.state.itemDescription,
          item_type: "A",
          status: true,
          image_url: this.state.itemImageUrl,
        },
      },
    }).then((newItem) => {
      this.getUserAxiosById();
      this.props.history.push(`/lists/${listId}`);
    });
  };

  handleListItemSubmit = (event) => {
    event.preventDefault();
    this.createListItemAxios();
  };

  deleteAxiosListItem = (event) => {
    console.log(this.props.location.pathname)
    let listId = this.props.location.pathname.slice(7);
    console.log(
      `${backendUrl}remove-list-item/${listId}/${event.target.id}`
    );
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${backendUrl}remove-list-item/${listId}/${event.target.id}`,
    }).then((removedItem) => {
      this.getUserAxiosById();
      this.props.history.push(`/lists/${listId}`);
    });
  };

  createItemAxios() {
    axios({
      method: "PUT",
      url: `${backendUrl}new-item`,
      data: {
        user: {
          _id: this.state.users[0]._id,
        },
        item: {
          item: this.state.itemName,
          item_desc: this.state.itemDescription,
          item_type: "A",
          status: true,
          image_url: this.state.itemImageUrl,
        },
      },
    }).then((newItem) => {
      this.getUserAxiosById();
      this.props.history.push(`/items/${newItem.data._id}`);
    });
  }

  handleItemSubmit = (event) => {
    event.preventDefault();
    this.createItemAxios();
  };

  putItemAxios = (event) => {
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${backendUrl}items/${event.target.id}`,
      data: {
        item: this.state.updatedItemName,
        item_desc: this.state.updatedItemDescription,
        item_type: "1",
        status: this.state.itemStatus,
        image_url: this.state.updatedItemImageUrl,
      },
    }).then((user) => {
      this.props.history.push("/items");
      this.getUserAxiosById();
    });
  };

  handleUpdateItem = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.putItemAxios(event);
  };

  putItemStatusAxios = (event) => {
    let updatedItemStatus = event.target.getAttribute('itemStatus')
    console.log(updatedItemStatus)
    let listId = this.props.location.pathname.slice(7);
    event.preventDefault();
    axios({
      method: "PUT",
      url: `${backendUrl}items/${event.target.id}`,
      data: {
        status: updatedItemStatus,
      },
    }).then((user) => {
      this.props.history.push(`/lists/${listId}`);
      this.getUserAxiosById();
    });
  };

  handleUpdateItemStatus = (event) => {
    event.preventDefault();
    this.putItemStatusAxios(event);
  };
  deleteAxiosItem = (event) => {
    console.log(
      `${backendUrl}delete-item/${this.state.userId}/${event.target.id}`
    );
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}delete-item/${this.state.userId}/${event.target.id}`,
    }).then((deletedUser) => {
      this.getUserAxiosById();
      this.props.history.push("/items");
    });
  };

  handleChange = (event) => {
    // console.log(event)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <Header
            userEmailAddress={this.state.userEmailAddress}
            handleLogout={this.handleLogout}
            isAuthenticated={this.state.isAuthenticated}
          />
        </header>
        {/* Route for SignIn component */}
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Signin
              {...routerProps}
              users={this.state.users}
              userId={this.state.userId}
              isAuthenticated={this.state.isAuthenticated}
              userEmailAddress={this.state.userEmailAddress}
              handleChange={this.handleChange}
              handleSignin={this.handleSignin}
            />
          )}
        />
        <div className="div-main">
          {/* SideNav component will always display after user is authenticated */}
          <SideNav isAuthenticated={this.state.isAuthenticated} />

          <Switch>
            {/* Route to view Lists component */}
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
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />

          {/* Route to view Lists component */}
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
                isAuthenticated={this.state.isAuthenticated}
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
                // itemStatus={this.state.itemStatus}
                updatedListTitle={this.state.updatedListTitle}
                updatedListImageUrl={this.state.updatedListImageUrl}
                handleChange={this.handleChange}
                handleListDelete={this.deleteAxiosList}
                handleUpdateList={this.handleUpdateList}
                handleUpdateItemStatus={this.handleUpdateItemStatus}
                handleListItemDelete={this.deleteAxiosListItem}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />

            {/* Route to create a new list (from navigation & UserDetails component)*/}
            <Route
              path="/new-list"
              render={(routerProps) => (
                <CreateList
                  {...routerProps}
                  users={this.state.users}
                  handleChange={this.handleChange}
                  handleListSubmit={this.handleListSubmit}
                  id={routerProps.location.pathname}
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />

            {/* Route to create a new item and add it to a list (from ListDetails component) */}
            <Route
              path="/new-listitem/:id"
              render={(routerProps) => (
                <CreateListItem
                  {...routerProps}
                  users={this.state.users}
                  handleChange={this.handleChange}
                  handleListItemSubmit={this.handleListItemSubmit}
                  id={routerProps.location.pathname}
                  isAuthenticated={this.state.isAuthenticated}
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
                  userId={this.state.userId}
                  handleChange={this.handleChange}
                  handleItemDelete={this.deleteAxiosItem}
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />

            {/* Route to view ListDetails component */}
            <Route
              path="/items/:id"
              render={(routerProps) => (
                <ItemDetails
                  {...routerProps}
                  users={this.state.users}
                  userId={this.state.userId}
                  updatedItemName={this.state.updatedItemName}
                  updatedItemDescription={this.state.updatedItemDescription}
                  updatedItemImageUrl={this.state.updatedItemImageUrl}
                  handleChange={this.handleChange}
                  handleItemDelete={this.deleteAxiosItem}
                  handleUpdateItem={this.handleUpdateItem}
                  isAuthenticated={this.state.isAuthenticated}
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
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />

            {/* Route to view the Task/Todo components */}
            <Route
              exact
              path="/tasks"
              render={(routerProps) => (
                <TaskListContext>
                  <div>
                    <TodoForm />
                    <TaskList />
                  </div>
                </TaskListContext>
              )}
            />

            <Route path="/*" render={() => <Redirect to="/" />} />
          </Switch>
        
      </div>
      </div>
    );
  }
}
export default withRouter(App);
