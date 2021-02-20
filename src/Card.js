import React from 'react';
import './Card.css';

function Card({title, desc, image}) {
    return (
        <div className="col-md-3 mt-2">
            <div className="card" style={{ width: 18+"rem;" }}>
                <img src={image} className="card-img-top" alt=""/>
                <h5 className="card-title">{title}</h5>
                <div className="card-body">
                    <p className="card-text">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;
