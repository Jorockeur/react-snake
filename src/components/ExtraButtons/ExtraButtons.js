import * as React from "react";

import NightMode from "../NightMode/NightMode";
import Pride from "../Pride/Pride";

import './extrabuttons.css';

import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

@inject('store')
@observer class ExtraButtons extends React.Component {
    render() {
        return (
            <div className="extrabuttons" style={{ width: this.props.store.size * PIXELS_UNIT + 4}}>
                <NightMode setStateInParent={ this.props.setStateInParent } nightmode={ this.props.nightmode } />
                <Pride setStateInParent={ this.props.setStateInParent } nightmode={ this.props.nightmode } />
            </div>
        )
    };
}

export default ExtraButtons;