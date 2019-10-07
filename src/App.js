import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar lastName="Toutoulou" firstName ="Toto" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6pbuUcpOUyYfwQVcMuD5tQaHG3m65tAVdxngKl1wNags8Cbn"/>
        <Avatar lastName="Toutoulou" firstName ="Tata" image="https://images-na.ssl-images-amazon.com/images/I/61Nd6mLP2OL._SL1500_.jpg"/>
        <Avatar lastName="Toutoulou" firstName ="Tutu" image="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/485762"/>
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
