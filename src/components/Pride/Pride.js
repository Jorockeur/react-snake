import * as React from "react";
import './pride.css';

class Pride extends React.Component {
    handleClick() {
        if (this.state.nightmode) {
            this.setState({ nightmode: false });
            this.props.setStateInParent('game');
            return;
        }
        this.setState({ nightmode: true });
        this.props.setStateInParent('game nightmode');
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