import React , {Component} from 'react';

const Contacts = ({image, firstName, lastName, online}) => (
    <div class= Contacts>
        <img src= {image} height ="100px" class="avatar"></img>
        <h1 class = "name">{firstName} {lastName.toUpperCase()}</h1>
        <div class = "status">
            <div class = 
        </div>
    </div>
)

export default Contacts