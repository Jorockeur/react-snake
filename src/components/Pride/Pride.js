import * as React from "react";

import './pride.css';

import { inject, observer } from "mobx-react";

@inject('store')
@observer class Pride extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrideOn: false,
        }
    }

    handleClick() {
        this.props.setStateInParent({ isPrideOn: !this.state.isPrideOn });
        this.setState({ isPrideOn: !this.state.isPrideOn })
    }

    render() {
        return (
            <React.Fragment>
                { this.props.nightmode ? (
                    <button onClick={ () => this.handleClick() } style={{ backgroundColor: '#ffffff', color: '#333333' }}>Show your pride!</button>
                ) : (
                    <button onClick={ () => this.handleClick() }>Show your pride!</button>
                )}
            </React.Fragment>
        )
    };
}

export default Pride;