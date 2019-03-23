import * as React from "react";
import './nightmode.css';

class NightMode extends React.Component {
    handleClick() {
        if (this.props.nightmode) {
            this.props.setStateInParent('game', false);
            return;
        }
        this.props.setStateInParent('game nightmode', true);
    }

    render() {
        return (
            <React.Fragment>
                { this.props.nightmode ? (
                    <button onClick={ () => this.handleClick() } style={{ backgroundColor: '#ffffff', color: '#333333' }}>Try Nightmode!</button>
                ) : (
                    <button onClick={ () => this.handleClick() }>Try Nightmode!</button>
                )}
            </React.Fragment>
        )
    };
}

export default NightMode;