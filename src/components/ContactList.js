import React , {Component} from 'react';
import Contacts from './Contacts';
import './ContactList.css'
const contacts = [
    {
        firstName:"Louella",
        lastName:"Barnett",
        image:"https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
        firstName:"Terry",
        lastName:"Pearson",
        image:"https://randomuser.me/api/portraits/men/84.jpg",
    },
    {
        firstName:"Krin",
        lastName:"Hopkins",
        image:"https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
        firstName:"Myrtle",
        lastName:"May",
        image:"https://randomuser.me/api/portraits/women/78.jpg",
    },
    {
        firstName:"Leah",
        lastName:"Lopez",
        image:"https://randomuser.me/api/portraits/women/18.jpg",
    },
]

const ContactList = () => (
    <ul>
        {contacts.map(item =>(
            <li key= {item.Lastname}>
            <Contacts firstName={item.firstName} 
            lastName={item.lastName} 
            image = {item.image} />
            </li>))};
    </ul>
)

export default ContactList;