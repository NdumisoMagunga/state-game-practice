import React, { Component } from 'react';


class ButtonClick extends Component {
    constructor(props) {
        super(props);
        this.state= {
            clickMe : 0
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={function(){
                        alert('clicked');
                    }}
                >Click Me</button>
            </div>
        )
    }
}

export default ButtonClick;