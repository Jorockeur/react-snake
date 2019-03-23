import * as React from "react";

import './pride.css';

import { inject, observer } from "mobx-react";

@inject('store')
@observer class Pride extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrideOn: false,
            buttonStyle: '',
            spanStyle: '',
            isPrideTried: false,
        }
    }

    componentDidMount() {
        setInterval(() => this.handleShakeInterval(), 8000);
    }

    handleShakeInterval() {
        if (this.state.isPrideTried) return;
        const prideButton = document.getElementsByClassName('prideButton')[0];
        prideButton.classList.add('tryMe');
        setTimeout(() => prideButton.classList.remove('tryMe'), 820);
    }

    handleClick() {
        this.props.setStateInParent({ isPrideOn: !this.state.isPrideOn });
        this.setState({ isPrideOn: !this.state.isPrideOn, isPrideTried: true });
    }

    handleMouseOver() {
        this.setState({ buttonStyle: 'prideVibes', spanStyle: 'pride' });
    }

    handleMouseOut() {
        this.setState({ buttonStyle: '', spanStyle: '' });
    }

    render() {
        return (
            <React.Fragment>
                {
                    (() => {
                        if (this.props.nightmode && this.state.isPrideOn)
                            return (
                                <button
                                    onClick={ () => this.handleClick() }
                                    onMouseOver={ () => this.handleMouseOver() }
                                    onMouseOut={ () => this.handleMouseOut() }
                                    className={ `prideButton ${ this.state.buttonStyle }` }
                                    style={{ backgroundColor: '#ffffff', color: '#333333' }}
                                ><span className={ `pride ${this.state.spanStyle}` }>Show your pride!</span></button>
                            );
                        if (this.props.nightmode && !this.state.isPrideOn)
                            return (
                                <button
                                    onClick={ () => this.handleClick() }
                                    onMouseOver={ () => this.handleMouseOver() }
                                    onMouseOut={ () => this.handleMouseOut() }
                                    className={ `prideButton ${ this.state.buttonStyle }` }
                                    style={{ backgroundColor: '#ffffff', color: '#333333' }}
                                ><span className={ this.state.spanStyle }>Show your pride!</span></button>
                            );
                        if (!this.props.nightmode && this.state.isPrideOn)
                            return (
                                <button
                                    onClick={ () => this.handleClick() }
                                    onMouseOver={ () => this.handleMouseOver() }
                                    onMouseOut={ () => this.handleMouseOut() }
                                    className={ `prideButton ${ this.state.buttonStyle }` }
                                ><span className={ `pride ${this.state.spanStyle}` }>Show your pride!</span></button>
                            );
                        else
                            return (
                                <button
                                    onClick={ () => this.handleClick() }
                                    onMouseOver={ () => this.handleMouseOver() }
                                    onMouseOut={ () => this.handleMouseOut() }
                                    className={ `prideButton ${ this.state.buttonStyle }` }
                                ><span className={ this.state.spanStyle }>Show your pride!</span></button>
                            );
                    })()
                }
            </React.Fragment>
        )
    };
}

export default Pride;