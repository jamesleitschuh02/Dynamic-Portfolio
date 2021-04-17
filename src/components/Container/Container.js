import React from 'react';
import './Container.css';

function Container(props) {
    return(
        <div className={props.styles}>{props.children}</div>
    );
}

export default Container;