import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './HOCs/Home';
import Support from './HOCs/Support';
import Contact from './HOCs/Contact';

//css
import './scss/main.css';
//initialize tap-event
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/support" component={Support}></Route>
          <Route path="/contactus" component={Contact}></Route>
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
