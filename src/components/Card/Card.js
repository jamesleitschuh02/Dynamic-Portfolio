import React from 'react';
import './Card.css';

//title, image, link - props

function Card(props) {
    return (
        
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="test">
                        <h1>{props.title}</h1>
                            <img src={props.image} alt="img" className="projectImage" />
                            <h4>{props.link}</h4>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        
    );
}

export default Card;