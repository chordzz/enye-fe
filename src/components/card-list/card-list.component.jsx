import React, {useState}from 'react';
import Pagination from "react-js-pagination";

import './card-list.styles.css';

import { Card } from "../card/card.component";



export const CardList = ({people}) => {

    const [activePage, setCurrentPage] = useState(1);

    const profiles = people;
    const profilesPerPage = 20;
    const indexOfLastProfile = activePage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);


    const renderProfiles = currentProfiles.map((profile, index) => {
        return <Card key={index} person={profile} />
    })

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    return (
        <div>

            <div className = 'card-list'>
                {renderProfiles}
            </div>

            <div className='pagination'>
                <Pagination 
                    activePage = { activePage }
                    itemsCountPerPage = { 3 }
                    totalItemsCount = {profiles.length}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}
                    
                />
            </div>
        </div>
    );
}
