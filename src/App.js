import React from "react"
import Homepage from "./Components/Homepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact
            path = "/"
            render={(props) => (
              <div>
                <Homepage />
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
