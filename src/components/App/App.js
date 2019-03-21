import * as React from "react";

import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import Info from "../Info/Info";

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
                <Controls />
                <Info />
            </div>
        )
    };
}

export default App;