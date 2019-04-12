import React, { Component } from 'react';
import './App.css';

class clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: this.props.date,
            timeDif: this.props.timeDif,
            location: this.props.location
        }
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    } 

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {
                date:new Date(),
                timeDif: this.props.timeDif,
                location: this.props.location
            }
        )
    }

    countTime(){
        let timeNow = this.state.date.getHours()+this.state.timeDif;
        if(timeNow>=24){
            timeNow = timeNow-24;
            return timeNow;
        }
        if(timeNow < 0){
            timeNow = timeNow+24;
            return timeNow;
        }else{
            return timeNow;
        }
    }

    render(){
        return(
            <div>
                <h1>It's {this.countTime()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()},location {this.state.location}</h1>
            </div>
        )
    }
}

export default clock;