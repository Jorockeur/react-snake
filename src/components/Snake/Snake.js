import * as React from "react";

import './snake.css';
import GraphicBrick from "../GraphicBrick/GraphicBrick";
import { inject } from "mobx-react";

@inject('store')
class Snake extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="snake">
                { this.props.store.engine.snake.map((brick, i) => <GraphicBrick brick={ brick } key={ i }/>) }
            </div>
        )
    };
}

export default Snake;