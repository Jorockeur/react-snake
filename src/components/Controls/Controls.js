import * as React from "react";

import './controls.css';

class Controls extends React.Component {
    handleClickStart(e) {
        console.log('start');
    }

    handleClickPause(e) {
        console.log('pause');
    }

    render() {
        return (
            <div className="controls">
                <button onClick={ (e) => this.handleClickStart(e) }>Start</button>
                <button onClick={ (e) => this.handleClickPause(e) }>Pause</button>
            </div>
        )
    };
}

export default Controls;