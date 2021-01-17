import React from 'react';

import './card.styles.css';


export const Card = ({person}) => (
    // Renders individual cards
    <div className = 'card-container'>
        <h2>{person.FirstName} {person.LastName}</h2>
        <p><span>E-mail: </span>{person.Email}</p>
        <p><span>Phone-no: </span>{person.PhoneNumber}</p>
        <table>
            
            <tr>
                <td><span>Gender: </span></td>
                <td>{person.Gender}</td>
            </tr>
            <tr>
                <td><span>Latitude: </span></td>
                <td>{person.Latitude}</td>
            </tr>
            <tr>
                <td><span>Longitude: </span></td>
                <td>{person.Longitude}</td>
            </tr>
            <tr>
                <td><span>Credit Card Type: </span></td>
                <td>{person.CreditCardType}</td>
            </tr>
            <tr>
                <td><span>Domain Name: </span></td>
                <td>{person.DomainName}</td>
            </tr>
            <tr>
                <td><span>Mac Address: </span></td>
                <td>{person.MacAddress}</td>
            </tr>
            <tr>
                <td><span>URL: </span></td>
                <td>{person.URL}</td>
            </tr>
            <tr>
                <td><span>Username: </span></td>
                <td>{person.UserName}</td>
            </tr>
            <tr>
                <td><span>Last Login: </span></td>
                <td>{person.LastLogin}</td>
            </tr>
            <tr>
                <td><span>Payment Method: </span></td>
                <td>{person.PaymentMethod}</td>
            </tr>

        </table>
        
    </div>
)
