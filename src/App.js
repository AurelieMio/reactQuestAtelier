import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.false
    };
    this.state.working = this.state.working.bind(this)
    this.setState = this.setState.bind(this);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" className={this.props.working ? "workingLogo": "notWorkingLogo"} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
        <button
        onClick={() => this.setState(state => ({working: !state.working }))}
        >
        </button>
      
    </div>
  );}
}

export default App;
