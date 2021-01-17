// Main Program


// Import needed dependencies 
import React, { useState, useEffect } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
import { FilterList } from './components/filter-list/filter-list.component';


// Main app function
function App () {


  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProfiles, setFetchedProfiles] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [toRender, setToRender] = useState('');
  
  useEffect(() => {


    // this fetches the profiles from the provided API
    const fetchProfiles = async () => {
      setIsLoading(true);

      const response = await fetch('https://api.enye.tech/v1/challenge/records');
      const jsonResponse = await response.json();
      
      setFetchedProfiles(jsonResponse.records.profiles);
      setIsLoading(false);
    }

    fetchProfiles();
  }, []);

  
  // Checks if the API has fetched the needed profiles and populated the state or not
  if(isLoading) {
        return <h1>Loading...</h1>
  } else {

    // Adds a fullname(concatenation of firstname and lastname) property to the array of profiles 
    fetchedProfiles.forEach(person => person.fullName = person.FirstName + ' ' +person.LastName);

    //This is responsible for the search function in the app
    let filteredPeople = fetchedProfiles.filter(person => person.fullName.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = e => {

      setSearchField(e.target.value)
      setToRender('');
    }


    // This is responsible for the individual filter fields on the app
    const filter = (e) => {

      const val = e.target.value;

      if (e.target.name === 'fGender' && val !== '') {

        return setToRender(fetchedProfiles.filter(profile => profile.Gender === val));
        
      } else if (e.target.name === 'fPayment' && val !== '') {
        
        return setToRender(fetchedProfiles.filter(profile => profile.PaymentMethod === val));

      }

      return setToRender(filteredPeople);
      
    }


    // This returns the needed div to be rendered
    return (
      <div className="App">

        <h1>Profiles</h1>

        {/* Searchbox component rendered */}
        <SearchBox placeholder="Search" handleChange={handleChange} />

        {/* Dropdown for filtering fields */}
        <FilterList handleChange = {filter} />

        {/* List to be rendered */}
        <CardList people = {toRender ? toRender : filteredPeople} />
        
      </div>
    )
  }
  
}

export default App;