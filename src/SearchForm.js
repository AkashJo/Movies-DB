import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {

  const {query , setQuery , error} = useGlobalContext(); //To avoid prop drilling

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  //controlled input
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  //onSubmit --> If user presses the enter button I don't want to refresh
  return <form className="search-form" onSubmit={handleSubmit}>
    <h2>Search Movies</h2>
    <input type="text" className="form-input" value={query} onChange={handleChange}></input>
    { error.show &&
    <div className="error">
      {error.msg}
    </div>
    } 
  </form>

}

export default SearchForm
