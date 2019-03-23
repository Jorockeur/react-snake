import * as React from "react";

import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import Info from "../Info/Info";
import NightMode from "../NightMode/NightMode";

import './app.css';
import ExtraButtons from "../ExtraButtons/ExtraButtons";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'game',
            nightmode: false,
        };
        this.setStateInParent = this.setStateInParent.bind(this);
    }

    setStateInParent(string, nightmode) {
        this.setState({ style: string, nightmode: nightmode });
    }

    render() {
        return (
            <div className={ this.state.style }>
                <h1>SNAKE PRIDE</h1>
                <Board />
                <Controls />
                <Info />
                <ExtraButtons setStateInParent={ this.setStateInParent } nightmode={ this.state.nightmode } />
            </div>
        )
    };
}

export default App;