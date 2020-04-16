import React from "react";
import Home from "./components/Home_auth";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
// import Lists from "./components/Lists";
import Tasks from "./components/Tasks";
import history from "./utils/history";



function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <Home />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />

          <PrivateRoute exact path='/lists' 
            // render={routerProps => (
              component={Tasks}
            //   <Lists
            //     {...routerProps}
            //     lists={this.state.lists}
            //     handleChange={this.handleChange} 
            //     handleListDelete={this.deleteAxiosList}
            //   />
            // )}
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;