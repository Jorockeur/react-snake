import * as React from "react";
import './info.css';
import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";
import Score from "../Score/Score";

@inject('store')
@observer class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pauseButtonText: 'Pause',
            startStyle: 'enabled',
            pauseStyle: 'disabled',
            resetStyle: 'disabled',
        }
    }

    render() {
        return (
            <Score />
        )
    };
}

export default Info;