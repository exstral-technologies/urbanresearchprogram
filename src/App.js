import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './HOCs/Home';
import Support from './HOCs/Support';
import Contact from './HOCs/Contact';
import ScrollToTop from './components/scroll/scrolltotop';

//css
import './scss/main.css';
//initialize tap-event
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/support" component={Support}></Route>
            <Route path="/contactus" component={Contact}></Route>
          </Switch>
        </ScrollToTop>
      </MuiThemeProvider>
    );
  }
}

export default App;
