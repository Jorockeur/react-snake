import * as React from "react";

import Level from "../Level/Level";

import './info.css';

import { inject, observer } from "mobx-react";
import { PIXELS_UNIT } from "../../business/Position";

const Info = inject('store')(observer(({ store }) =>
    <div className='info' style={{ width: store.size * PIXELS_UNIT + 4}}>
        <div className='stats'>
            <span>Score: { store.score }</span>
            <span>Level: { store.level }</span>
        </div>
        <Level />
    </div>
));

export default Info;