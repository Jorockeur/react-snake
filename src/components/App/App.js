import * as React from "react";

import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import Info from "../Info/Info";
import NightMode from "../NightMode/NightMode";

import './app.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'game',
        };
        this.setStyle = this.setStyle.bind(this);
    }

    setStyle(string) {
        this.setState({ style: string });
    }

    render() {
        return (
            <div className={ this.state.style }>
                <h1>SNAKE PRIDE</h1>
                <Board />
                <Controls />
                <Info />
                <NightMode setStyle={ this.setStyle }/>
            </div>
        )
    };
}

export default App;