import * as React from "react";

import './controls.css';

class Controls extends React.Component {
    handleClickStart() {
        console.log('start');
    }

    handleClickPause() {
        console.log('pause');
    }

    render() {
        return (
            <div className="controls">
                <button onClick={ () => this.handleClickStart() }>Start</button>
                <button onClick={ () => this.handleClickPause() }>Pause</button>
            </div>
        )
    };
}

export default Controls;