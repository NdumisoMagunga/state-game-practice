import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score : 99,
            gameOver: false
        }
    }

    

    render() {
        return (
            <div>
                folow
                <h1> your score is : {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;