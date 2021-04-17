import React from 'react';
import './Row.css';

function Row(props) {
    return(
        <div className={props.styles}>{props.children}</div>
    );
}

export default Row;