import * as React from "react";

import GraphicBrick from "../GraphicBrick/GraphicBrick";

import './snake.css';

import {inject, observer} from "mobx-react";

const Snake = inject('store')(observer(({ store }) =>
    <div className="snake">
        { store.engine.snake.map((brick, i) => <GraphicBrick brick={ brick } key={ i }/>) }
    </div>
));

export default Snake;