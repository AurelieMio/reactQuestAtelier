import React from 'react'; 
import {Component} from 'react';

const Avatar = ({image, firstName, lastName,}) => (
    <div>
        <h1>{lastName}.toUpperCase()</h1>
        <h2>{firstName}</h2>
        <img src= {image}></img>
    </div>
)

export default Avatar