import React, {Component} from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard.js'

class SimpsonQuote extends Component{
    constructor(props){
        super(props);
        this.state = {
            quote: "quoteexample"
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
                    <QuoteCard simpson = {this.state.quote}></QuoteCard>
                    <button onClick={(e)=> this.getSimpsonQuote()}>New Quote</button>
                    <p></p>
                </div>
            )}
};

export default SimpsonQuote;