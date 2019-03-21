import * as React from "react";
import './controls.css';
import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

@inject('store')
@observer class Controls extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="controls" style={{ width: this.props.store.size * PIXELS_UNIT + 4}}>
                {{
                    'new_game': (
                        <React.Fragment>
                            <button onClick={ () => this.props.store.start() } className="enabled">Start</button>
                            <button className="disabled">Reset</button>
                        </React.Fragment>
                    ),
                    'running': (
                        <React.Fragment>
                            <button onClick={ () => this.props.store.pause() } className="enabled">Pause</button>
                            <button className="disabled">Reset</button>
                        </React.Fragment>
                    ),
                    'paused': (
                        <React.Fragment>
                            <button onClick={ () => this.props.store.start() } className="enabled">Resume</button>
                            <button onClick={ () => this.props.store.reset() } className="enabled">Reset</button>
                        </React.Fragment>
                    ),
                    'game_over': (
                        <React.Fragment>
                            <button onClick={ () => this.props.store.reset() } className="gameOver">Reset</button>
                        </React.Fragment>
                    )
                }[this.props.store.state]}
            </div>
        )
    };
}

export default Controls;