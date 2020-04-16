import React from "react";
import Home from "./components/Home_auth";
// import axios from 'axios';
import PrivateRoute from "./components/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Lists from "./components/Lists";
// import Tasks from "./components/Tasks";
// import SideNav from "./components/SideNav";
// import history from "./utils/history";
// import CreateUser from "./components/CreateUser";

// let backendUrl = "http://localhost:8080/";

function App() {


  

  return (
    <div className="App">
      <header>
        <Home />
      </header>
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />

        <PrivateRoute
          exact
          path="/lists"
          render={routerProps => (
          // component={Tasks}
            <Lists
              // {...routerProps}
              // lists={this.state.lists}
              // handleChange={this.handleChange}
              // handleListDelete={this.deleteAxiosList}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
