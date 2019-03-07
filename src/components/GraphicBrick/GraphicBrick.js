import React from "react";

class GraphicBrick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: 'body'};
    }

    render() {
        return (
            <div className={this.state.type}></div>
        )
    }
}