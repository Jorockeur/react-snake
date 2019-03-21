import * as React from "react";

import './score.css';
import { inject, observer } from "mobx-react";

const Score = inject('store')(observer(({ store }) => <div className='score'>Score : { store.score }</div>));

export default Score;