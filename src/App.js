import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpsonQuote from "./components/SimpsonQuote.js"
class App extends React.Component {

  render(){
  return (
    <div className="App">
    <SimpsonQuote/>
        
    </div>
  );}
}

export default App;
