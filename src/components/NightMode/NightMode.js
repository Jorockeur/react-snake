import * as React from "react";
import './nightmode.css';
import { inject, observer } from "mobx-react";
import {PIXELS_UNIT} from "../../business/Position";

@inject('store')
@observer class NightMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nightmode: false,
        }
    }
    handleClick() {
        if (this.state.nightmode) {
            this.setState({ nightmode: false });
            this.props.setStyle('game');
            return;
        }
        this.setState({ nightmode: true });
        this.props.setStyle('game nightmode');
    }

    render() {
        return (
            <div className='nightmodeControls' style={{ width: this.props.store.size * PIXELS_UNIT + 4}}>
                { this.state.nightmode ? (
                    <button onClick={ () => this.handleClick() } style={{ marginRight: '10px', backgroundColor: '#ffffff', color: '#333333' }}>Try Nightmode!</button>
                ) : (
                    <button onClick={ () => this.handleClick() } style={{ marginRight: '10px' }}>Try Nightmode!</button>
                )}
            </div>
        )
    };
}

export default NightMode;