import * as React from "react";

import Snake from "../Snake/Snake";

import './board.css';

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Snake></Snake>
            </div>
        )
    };
}

export default Board;