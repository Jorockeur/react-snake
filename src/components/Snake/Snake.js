import * as React from "react";

import './snake.css';

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snakeBody: [],
        }
    }

    render() {
        return (
            <div className="snake">
                <GraphicBrick />
            </div>
        )
    };
}

export default Snake;