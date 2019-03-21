import React from "react";
import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

@inject('store')
@observer
class GraphicBrick extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: this.props.brick.yPixels,
                left: this.props.brick.xPixels,
                backgroundColor: this.props.brick.color,
                height: `${ PIXELS_UNIT }px`,
                width: `${ PIXELS_UNIT }px`
            }} />
        )
    }
}

export default GraphicBrick;