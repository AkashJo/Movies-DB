import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

//console.log(API_ENDPOINT);

const AppProvider = ({ children }) => {

  //state values
  //loading  while fetching data
  //error
  //movies
  //query

  const [loading , setLoading] = useState(true); //By default we will always load
  const [error , setError] = useState({show : false , msg : ''}); //It will be an object since we will be showing messages
  const [movies , setMovies] = useState([]);
  const [query , setQuery] = useState('avengers'); //By default we should display some movies on the page
 //const [query , setQuery] = useState('sup'); //Once in a while you can get movies but they dont have a poster

  //{Response: "False", Error: "Movie not found!"} ==> If you type query ('batma') ==> Need to deal this in try catch block
  //{Search: Array(10), totalResults: "445", Response: "True"} ==> If you type query ('batman')

  const fetchMovies = async (url) => {
    //Every time we type some query, we invoke this function, so I want my loading to be displayed
    setLoading(true); //To tell user , Listen we are loading
    try {

      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);

      if(data.Response === 'True') {
        setMovies(data.Search);
        setError({show : false , msg : ''}); //This means while you are typing the query the error message should go
      }else {
        setError({show : true , msg : data.Error});
      }

      setLoading(false);

    } catch (error) {
      //console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`); //since out API for movies is in this way
  }, [query]) //Every time I type something in input, I want to run fetchMovies

  return <AppContext.Provider value={{loading ,  error , movies , query , setQuery}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
