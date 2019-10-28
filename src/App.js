import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import HtmlDef from "./components/HtmlDefinition"
import CssDef from "./components/CssDefinition"
import JsDef from "./components/JsDefinition"
import NavBar from "./components/NavBar"


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render(){
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/HTML" component={HtmlDef}/>
          <Route path="/CSS" component={CssDef}/>
          <Route path="/JS" component={JsDef}/>
        </Switch>
      </BrowserRouter>
    </div>

  );}
}

export default App;
