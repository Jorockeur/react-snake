import * as React from "react";

import Snake from "../Snake/Snake";

import './board.css';
import {inject, observer} from "mobx-react";
import {PIXELS_UNIT} from "../../business/Position";
import GraphicBrick from "../GraphicBrick/GraphicBrick";

@inject('store')
@observer class Board extends React.Component {
    render() {
        return (
            <div className="board" style={{ width: this.props.store.size * PIXELS_UNIT, height: this.props.store.size  * PIXELS_UNIT }}>
                <Snake />
                { this.props.store.engine.food !== null && <GraphicBrick brick={ this.props.store.engine.food } /> }
            </div>
        )
    };
}

export default Board;