
import React, { useState, useEffect } from 'react';
import Pagination from "react-js-pagination";


import './App.css';

import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';
import SearchBox from "./components/search-box/search-box.component";
import {FilterList} from './components/filter-list/filter-list.component';


function App () {
  // const [isLoading, setIsLoading] = useState(false);
  // const [filtered, setFiltered] = useState([]);
  // const [isFilter, setIsFilter] = useState(false);
  const [fetchedProfiles, setFetchedProfiles] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [toRender, setToRender] = useState('');
  const [activePage, setCurrentPage] = useState(1);
  let isFilter = false;
  let isLoading = false;
  
  useEffect(() => {

    const fetchProfiles = async () => {
      // setIsLoading(true);
      isLoading = true;

      const response = await fetch('https://api.enye.tech/v1/challenge/records');
      const jsonResponse = await response.json();
      
      setFetchedProfiles(jsonResponse.records.profiles);
      // setIsLoading(false);
      isLoading = false;
    }

    fetchProfiles();
    // console.log(fetchedProfiles.map(profile => profile.Gender))
    // console.log(fetchedProfiles.map(profile => profile.PaymentMethod))
  
  }, []);

  
  if(isLoading) {
        return <h1>Loading...</h1>
  } else {

    let filteredPeople = fetchedProfiles.filter(person => person.FirstName.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = e => {
      // setIsFilter(false)
      isFilter = false;
      setSearchField(e.target.value)
      setToRender('');
      // setToRender(fetchedProfiles.filter(person => person.FirstName.toLowerCase().includes(searchField.toLowerCase())));

    }

    const filter = (e) => {
      // setIsFilter(true);
      isFilter = true;
      const val = e.target.value;
      if (e.target.name === 'fGender') {
        setToRender(fetchedProfiles.filter(profile => profile.Gender === val));
        // filteredPeople = fetchedProfiles.filter(profile => profile.Gender === val)
        
      } else if(e.target.name === 'fPayment') {
        setToRender(fetchedProfiles.filter(profile => profile.PaymentMethod === val));
        // filteredPeople = fetchedProfiles.filter(profile => profile.Gender === val)
      }
      
    }
    // setToRender(filteredPeople);

    // const todos = toRender;
    // const todosPerPage = 10;
    // const indexOfLastTodo = activePage * todosPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    // let i = 100;
    // const renderTodos = currentTodos.map((todo, index) => {
    //     return <Card key={i++} person={todo} />
    // })
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // };
    

    return (
      <div className="App">

        <h1>Profiles</h1>

        <SearchBox 
          placeholder="Search"
          handleChange={handleChange}
        />

        <br />

        <FilterList handleChange = {filter} />
        

        {/* {
          isFilter ? 
            <CardList 
              renderTodos={renderTodos} 
              activePage={activePage} 
              todos={todos} 
              handlePageChange={handlePageChange}
            />
          : 
            <CardList 
              renderTodos={renderTodos} 
              activePage={activePage} 
              todos={toRender ? toRender : fetchedProfiles} 
              handlePageChange={handlePageChange}
            />
        } */}

        {/* <CardList people = {filteredPeople}/>
        {console.log(filtered)} */}

        <CardList people = {toRender ? toRender : filteredPeople} />
        

              

      </div>
    )
  }
  
}

export default App;