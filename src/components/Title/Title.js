import * as React from "react";

import './title.css';

const Title = (props) => (
    <React.Fragment>
        { props.isPrideOn ? (
            <React.Fragment>
                <h1 className="pride">SNAKE PRIDE</h1>
                <h2 className="pride">Taste the rainbow... that's what she said ( ͡° ͜ʖ ͡°)</h2>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <h1>A COOL SNAKE GAME</h1>
                <h2>ᕕ( ᐛ )ᕗ</h2>
            </React.Fragment>
        )}
    </React.Fragment>
);

export default Title;