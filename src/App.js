import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div className="App">
      <Counter/>
    </div>
  );}
}

export default App;
