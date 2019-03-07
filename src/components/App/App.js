import * as React from "react";

import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import Score from "../Score/Score";

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
                <Controls />
                <Score />
            </div>
        )
    };
}

export default App;