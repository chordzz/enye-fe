
import React, { useState, useEffect } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
import { FilterList } from './components/filter-list/filter-list.component';


function App () {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProfiles, setFetchedProfiles] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [toRender, setToRender] = useState('');
  
  useEffect(() => {

    const fetchProfiles = async () => {
      setIsLoading(true);

      const response = await fetch('https://api.enye.tech/v1/challenge/records');
      const jsonResponse = await response.json();
      
      setFetchedProfiles(jsonResponse.records.profiles);
      setIsLoading(false);
    }

    fetchProfiles();
  }, []);

  
  if(isLoading) {
        return <h1>Loading...</h1>
  } else {

    let filteredPeople = fetchedProfiles.filter(person => person.FirstName.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = e => {

      setSearchField(e.target.value)
      setToRender('');
    }

    const filter = (e) => {

      const val = e.target.value;

      if (e.target.name === 'fGender' && val !== '') {

        return setToRender(fetchedProfiles.filter(profile => profile.Gender === val));
        
      } else if (e.target.name === 'fPayment' && val !== '') {
        
        return setToRender(fetchedProfiles.filter(profile => profile.PaymentMethod === val));

      }

      return setToRender(filteredPeople);
      
    }

    
    return (
      <div className="App">

        <h1>Profiles</h1>

        <SearchBox placeholder="Search" handleChange={handleChange} />

        <FilterList handleChange = {filter} />

        <CardList people = {toRender ? toRender : filteredPeople} />
        
      </div>
    )
  }
  
}

export default App;