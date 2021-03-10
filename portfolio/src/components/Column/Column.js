import React from 'react';

function Column(props) {
    let parameters = `col-lg-${props.size}`;
    return(
        <div className={parameters}>{props.children}</div>
    );
}

export default Column;