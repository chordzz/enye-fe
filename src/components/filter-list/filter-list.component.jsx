import React from "react";

import './filter-list.styles.css'

import CardList from '../card-list/card-list.component';
import Card from '../card/card.component';

export const FilterList = ({handleChange}) => {

    return(
        <div className='card-list'>
            <label for="fGender">Filter By Gender:</label>
            <select className='search' id='fGender' name="fGender" onChange={handleChange}>
                <option value="">...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer to skip">Prefer to Skip</option>
            </select>

            <label for="fGender">Filter By Payment Method:</label>
            <select className='search'id='fPayment' name="fPayment" onChange={handleChange}>
                <option value="">...</option>
                <option value="paypal">Pay pal</option>
                <option value="cc">CC</option>
                <option value="check">Check</option>
                <option value="money order">Money Order</option>
            </select>
        </div>
        
    )

    
}

