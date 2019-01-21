import * as React from "react";

import './controls.css';

const StartButton = () => {
    return(
        <button>Start</button>
    )
};

const PauseButton = () => {
    return(
        <button>Pause</button>
    )
};

class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <StartButton></StartButton>
                <PauseButton></PauseButton>
            </div>
        )
    };
}

export default Controls;