
import React, { useState, useEffect } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';
import SearchBox from "./components/search-box/search-box.component";
import {FilterList} from './components/filter-list/filter-list.component';

function App () {

  const [fetchedProfiles, setFetchedProfiles] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [isFilter, setIsFilter] = useState(false);
  const [searchField, setSearchField] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [toRender, setToRender] = useState([]);
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
  
  }, []);

  
  if(isLoading) {
        return <h1>Loading...</h1>
  } else {

    const filter = (e) => {
      // setIsFilter(true);
      isFilter = true;
      const val = e.target.value;
      if (e.target.name === 'fGender') {
        setToRender(fetchedProfiles.filter(profile => profile.Gender === val))
      } else if(e.target.name === 'fPayment') {
        setToRender(fetchedProfiles.filter(profile => profile.PaymentMethod === val))
      }
    }

    const handleChange = e => {
      // setIsFilter(false)
      isFilter = false;
      setSearchField(e.target.value)
    }

    const filteredPeople = fetchedProfiles.filter(person => person.FirstName.toLowerCase().includes(searchField.toLowerCase()));
    // setToRender(filteredPeople);


    const todos = toRender;
    const todosPerPage = 20;

    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    let i = 100;
    const renderTodos = currentTodos.map((todo, index) => {
        return <Card key={i++} person={todo} />
    })
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    

    return (
      <div className="App">

        <h1>Patients</h1>

        <SearchBox 
          placeholder="Search"
          handleChange={handleChange}
        />

        <br />

        <FilterList handleChange = {filter} />
        

        {
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
              todos={filteredPeople} 
              handlePageChange={handlePageChange}
            />

        }

        {/* <CardList people = {filteredPeople}/>
        {console.log(filtered)} */}

              

      </div>
    )
  }
  
}

export default App;




  // function handleChangeFilter(e) {
  //   setIsFilter(true);
  //   setFilter(e.target.value);
  // }

  // function handleChangeSearch(e) {
  //   setIsFilter(false);
  //   setSearchField(e.target.value);
  // }
  

  // const filteredPeople = records.profiles.filter(person => person.FirstName.toLowerCase().includes(searchField.toLowerCase()));

  // return (
    // <div className="App">

    //   <h1>Patients</h1>

    //   {/* <SearchBox 
    //     placeholder="Search"
    //     handleChange={e => setSearchField(e.target.value)}
    //   /> */}
      

    //   {/* {
    //     isFilter ? 
    //       <CardList people = {maleArr}/>
    //     : 
    //       <CardList people = {filteredPeople}/>

    //   } */}

    //   <CardList people = {filteredPeople}/>

            

    // </div>
  // );




  // constructor() {
  //   super();

  //   this.state = {
  //     records: {},
  //     status: '',
  //     size: '',
  //     isLoading: false
  //   }
  // }

  // componentDidMount() {

  //   // this.setState({isLoading: true});

  //   fetch('https://api.enye.tech/v1/challenge/records')
  //   .then(response => response.json())
  //   .then(data => return(
  //     setRecords(data.records)
  //     setStatus(data.status)
  //     setSize(data.size)
  //   ))
  //   // .then(data => this.setState({records: data.records, status: data.status, size: data.size, isLoading: false}));
  //   // .then(records => this.setState({ records: users}));
    
  // }

  // render() {

  // const {records, status, size, isLoading} = this.state;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>Hello World!</p>
  //       <h1>Iferrum</h1>
  //       {/* {console.log(records)}
  //       {console.log(status)}
  //       {console.log(size)} */}
        
  //       <CardList isLoading={isLoading} status={status} records={records} size={size}/>
  //     </header>
  //   </div>
  // );
  // }