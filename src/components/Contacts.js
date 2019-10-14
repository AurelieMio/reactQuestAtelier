import React, { Component } from 'react';
import './Contacts.css'

// const Contacts = props => (
//     <div className="Contact">
//         <img src={props.image} class="avatar" alt="{props.firstName}"></img>
//         <div><h1 className="name">{props.firstName} {props.lastName.toUpperCase()}</h1>
//             <div className="status">
//                 <div className={props.online ? "status-online" : "status-offline"}></div>
//                 <p className="status-text">{props.online ? "Online" : "Offline"}</p>
//             </div>
//         </div>
//     </div>
// )



class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        }
    }
    render() {
        return (
            <div className="Contact">
                <img src={this.props.image} class="avatar" alt="{this.props.firstName}"></img>
                <div><h1 className="name">{this.props.firstName} {this.props.lastName.toUpperCase()}</h1>
                    <div className="status"
                    onClick = {event => {
                        const newOnline = !this.state.online;
                        this.setState({ online : newOnline});
                    }}>
                        <div className={this.state.online ? "status-online" : "status-offline"}>
                        </div>
                        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contacts;