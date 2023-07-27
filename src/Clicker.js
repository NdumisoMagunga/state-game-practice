import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);

        this.state ={
            initNum : 1,
        }
    }

    randoHandler = e => {
        let rand = Math.floor(Math.random() * 11)
        this.setState({initNum : rand})
    }
    render(){
        return (
            <div>
                <h1>your number is {this.state.initNum}</h1>
                {
                this.state.initNum === 7 ? 
                <h1>YOU WON</h1>
                :<button
                    onClick={this.randoHandler}
                >Click to Win</button> 
                 
            }
                
            </div>
        )
    }
}

export default Clicker;