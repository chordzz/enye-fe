import React, {useState} from 'react';
// import ReactPaginate from 'react-paginate';
import Pagination from "react-js-pagination";

import './card-list.styles.css';

import { Card } from "../card/card.component";

export const CardList = ({renderTodos, activePage, todos, handlePageChange}) => {

    // const [currentPage, setCurrentPage] = useState(0);
    // const [data, setData] = useState([]);
    // const PER_PAGE = 10;
    // const offset = currentPage * PER_PAGE;
    // setData(props.people);

    // const currentPageData = data.slice(offset, offset + PER_PAGE).map((person, index)=> <Card key={index} person={person} />)

    // const pageCount = Math.ceil(data.length / PER_PAGE);

    // function handlePageClick({ selected: selectedPage }) {
    //     setCurrentPage(selectedPage);
    // }


    return (
        <div className = 'card-list'>

            {renderTodos}
            <div className='pagination'>
                <Pagination 
                    activePage = { activePage }
                    itemsCountPerPage = { 3 }
                    totalItemsCount = {todos.length}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}
                />
            </div>
            {/* {props.people.map((person, index) => <Card key={index} person={person} />)} */}
            {/* <ReactPaginate 
                previousLabel={'<<<'}
                nextLabel={'>>>'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            {currentPageData} */}
        </div>
    );
    // }
    

}

export default CardList;