import React from 'react';
import { render } from 'react-dom';

import App from "./components/App/App";
import { Provider } from "mobx-react";
import SnakeGame from "./business/SnakeGame";


const SnakeGameStore = new SnakeGame();

render (
    <Provider store={SnakeGameStore}>
        <App />
    </Provider>, document.getElementById('app'));