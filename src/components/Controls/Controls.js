import * as React from "react";
import './controls.css';
import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

@inject('store')
@observer class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pauseButtonText: 'Pause',
            startStyle: 'enabled',
            pauseStyle: 'disabled',
            resetStyle: 'disabled',
        }
    }

    handleClickStart() {
        if (this.props.store.state !== 'new_game') return;
        this.props.store.start();
        this.setState({ startButtonText: 'Reset', startStyle: 'disabled', pauseStyle: 'enabled' });
    }

    handleClickPause() {
        if (this.props.store.state === 'new_game' || this.props.store.state === 'game_over') return;
        if (this.props.store.state === 'running') {
            this.props.store.pause();
            this.setState({ pauseButtonText: 'Unpause', resetStyle: 'enabled' });
            return;
        }
        this.props.store.start();
        this.setState({ pauseButtonText: 'Pause', resetStyle: 'disabled' });
    }

    handleClickReset() {
        if (this.props.store.state === 'new_game' || this.props.store.state === 'running') return;
        this.props.store.reset();
        this.setState({ pauseButtonText: 'Pause', startStyle: 'enabled', pauseStyle: 'disabled', resetStyle: 'disabled' });
    }

    render() {
        return (
            <div className="controls" style={{ width: this.props.store.size * PIXELS_UNIT + 4}}>
                <button onClick={ () => this.handleClickStart() } className={ this.state.startStyle }>Start</button>
                <button onClick={ () => this.handleClickPause() } className={ this.state.pauseStyle }>{ this.state.pauseButtonText }</button>
                <button onClick={ () => this.handleClickReset() } className={ this.state.resetStyle }>Reset</button>
            </div>
        )
    };
}

export default Controls;