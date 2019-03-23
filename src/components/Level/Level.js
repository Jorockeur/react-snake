import * as React from "react";

import './level.css';

import { inject, observer } from "mobx-react";

@inject('store')
@observer class Level extends React.Component {
    handleChange(e) {
        this.props.store.level = e.target.value;
    }

    render() {
        return (
            <div>
                <label htmlFor="level">Choose your level: </label>
                <select id="level" onChange={ (e) => this.handleChange(e) }>
                    <option value={ 1 }>1</option>
                    <option value={ 2 }>2</option>
                    <option value={ 3 }>3</option>
                    <option value={ 4 }>4</option>
                    <option value={ 5 }>5</option>
                </select>
            </div>
        )
    };
}

export default Level;