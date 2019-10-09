import React , {Component} from 'react';
import './Contacts.css'

const Contacts = props => (
    <div className = "Contact">
        <img src= {props.image}  class="avatar" alt="{props.firstName}"></img>
        <div><h1 className = "name">{props.firstName} {props.lastName.toUpperCase()}</h1>
            <div className = "status">
                <div className = {props.online ? "status-online" : "status-offline"}></div>
                <p className = "status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
)

export default Contacts;