import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function NavBar(){

        return(
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/HTML">HTML</Link></li>
            <li><Link to="/CSS">CSS</Link></li>
            <li><Link to="/JS">JS</Link></li>
        </ul>)
    }

export default NavBar