import * as React from "react";

import Snake from "../Snake/Snake";

import './board.css';
import {inject, observer} from "mobx-react";
import {PIXELS_UNIT} from "../../business/Position";
import GraphicBrick from "../GraphicBrick/GraphicBrick";

const Board = inject('store')(observer(({ store }) =>
    <React.Fragment>
        {{
            'new_game' : (
                <div className="board" style={{ width: store.size * PIXELS_UNIT, height: store.size  * PIXELS_UNIT }}>
                    <Snake />
                    { store.engine.food !== null && <GraphicBrick brick={ store.engine.food } /> }
                </div>
            ),
            'running' :(
                <div className="board" style={{ width: store.size * PIXELS_UNIT, height: store.size  * PIXELS_UNIT }}>
                    <Snake />
                    { store.engine.food !== null && <GraphicBrick brick={ store.engine.food } /> }
                </div>
            ),
            'paused' : (
                <React.Fragment>
                    <div className="gameOverText" style={{ width: store.size * PIXELS_UNIT, marginTop: `${ 80 + (store.size * PIXELS_UNIT / 2) }px` }}>PAUSE</div>
                    <div className="board smoke" style={{ width: store.size * PIXELS_UNIT, height: store.size  * PIXELS_UNIT }}>
                        <Snake />
                        { store.engine.food !== null && <GraphicBrick brick={ store.engine.food } /> }
                    </div>
                </React.Fragment>
            ),
            'game_over': (
                <React.Fragment>
                    <div className="gameOverText" style={{ width: store.size * PIXELS_UNIT, marginTop: `${ 80 + (store.size * PIXELS_UNIT / 2) }px` }}>GAME OVER</div>
                    <div className="board smoke" style={{ width: store.size * PIXELS_UNIT, height: store.size  * PIXELS_UNIT }}>
                        <Snake />
                        { store.engine.food !== null && <GraphicBrick brick={ store.engine.food } /> }
                    </div>
                </React.Fragment>
            )
        }[store.state]}
    </React.Fragment>
));

export default Board;