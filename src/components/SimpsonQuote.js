import React, {Component} from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard.js'

class SimpsonQuote extends Component{
    constructor(props){
        super(props);
        this.state = {
            quote: null
        }
    }
    getSimpsonQuote = () => {
    const url = "https://quests.wilders.dev/simpsons-quotes/quotes"
    axios.get(url)
        .then(response => response.data)
        .then(data =>{
            console.log(data)
            this.setState ({quote : data[0]})}
        )
        };
    
    componentDidMount = () => {
     this.getSimpsonQuote();
    }
    render(){
        return (
                <div>
                    { this.state.quote 
                    ? <QuoteCard simpson = {this.state.quote}></QuoteCard> 
                    : <p> No quote yet </p>}
                    <button onClick={(e)=> this.getSimpsonQuote()}>New Quote</button>
                    <p></p>
                </div>
            )}
};

export default SimpsonQuote;