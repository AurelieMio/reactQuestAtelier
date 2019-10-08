import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts.js'

function App() {
  return (
    <div className="App">
      <Contacts image="https://randomuser.me/api/portraits/lego/1.jpg"
       firstName="Toto" lastName="Angular" online/>
       <Contacts image="https://randomuser.me/api/portraits/lego/6.jpg"
       firstName="Tata" lastName="React" online/>
       <Contacts image="https://randomuser.me/api/portraits/lego/8.jpg"
       firstName="Tutu" lastName="PHP"  />
    </div>
  );
}

export default App;
