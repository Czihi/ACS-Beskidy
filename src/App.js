import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Background from "./components/Background";
import Topbar from "./components/Topbar";
class App extends Component {
  render() {
    return(
    <Router>

      <Route path="/ACS-Beskidy" exact render={
        () => {
          return (
              <div>
                  <Topbar/>
                   <Background/>
              </div>)
        }
      }/>
    </Router>
    )
  }
}

export default App;
