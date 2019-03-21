import * as React from "react";
import './controls.css';
import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

const Controls = inject('store')(observer(({ store }) =>
    <div className="controls" style={{ width: store.size * PIXELS_UNIT + 4}}>
        {{
            'new_game': (
                <React.Fragment>
                    <button onClick={ () => store.start() } className="enabled">Start</button>
                    <button className="disabled">Reset</button>
                </React.Fragment>
            ),
            'running': (
                <React.Fragment>
                    <button onClick={ () => store.pause() } className="enabled">Pause</button>
                    <button className="disabled">Reset</button>
                </React.Fragment>
            ),
            'paused': (
                <React.Fragment>
                    <button onClick={ () => store.start() } className="enabled">Resume</button>
                    <button onClick={ () => store.reset() } className="enabled">Reset</button>
                </React.Fragment>
            ),
            'game_over': (
                <React.Fragment>
                    <button onClick={ () => store.reset() } className="gameOver">Reset</button>
                </React.Fragment>
            )
        }[store.state]}
    </div>
));

export default Controls;