import * as React from "react";

import Board from "../Board/Board";
import Controls from "../Controls/Controls";
import ExtraButtons from "../ExtraButtons/ExtraButtons";
import Info from "../Info/Info";
import Title from "../Title/Title";

import './app.css';

import { inject, observer } from "mobx-react";

@inject('store')
@observer class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'container',
            nightmode: false,
            isPrideOn: false,
        };
        this.setStateInParent = this.setStateInParent.bind(this);
    }

    setStateInParent(data) {
        this.setState(data);
    }

    render() {
        return (
            <div className={ this.state.style }>
                <div className='placement'/>
                <div className='game'>
                    <Title isPrideOn={ this.state.isPrideOn } />
                    <Board />
                    <Controls />
                    <Info />
                    <ExtraButtons setStateInParent={ this.setStateInParent } nightmode={ this.state.nightmode } isPrideOn={ this.state.isPrideOn } />
                </div>
                <div className="howToPlay">
                    <p>
                        Press WASD / ZQSD or the arrow keys to change direction<br/>
                        Press SPACE to START or PAUSE the game<br/>
                        Enjoy!
                    </p>
                </div>
            </div>
        )
    };
}

export default App;