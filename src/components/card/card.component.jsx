import React from 'react';

import './card.styles.css';


export const Card = ({person}) => (
    <div className = 'card-container'>
        <h2>{person.FirstName} {person.LastName}</h2>
        <p>{person.Email}</p>
        <p>{person.PhoneNumber}</p>
    </div>
)

export default Card;