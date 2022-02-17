import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {

  const {id} = useParams();

  const [movie , setMovie] = useState({});
  const [loading  , setLoading] = useState (true) ;
  const [error , setError] = useState({show : false , msg : ''});

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data in SngleMovie.js");
    // console.log(data);

    if(data.Response === "False") {
      setError({show : true , msg : data.Error});
      setLoading(false);
    }
    else {
      setMovie(data);
      setLoading(false);
    }

  }

   useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
   }, [id]) //When my id changes I want to invoke it



  if(loading) {
    return <div className="loading">
    </div>
  }

  if(error.show) {
    return <div className="page-error">
      <h1>{error.msg}</h1>
      <Link to="/" className="btn">
        Back to Movies
      </Link>
    </div>
  }

  //Destrucure the values of movie 
  //This is only done when the object is not empty 
  //And this handling is done in above if conditions

  // console.log("Inside movies");
  // console.log(movie);

  const {Poster : poster , Title : title , Plot : plot , Year : year , Actors : actors , 
  Awards : awards , Genre : genre , BoxOffice : earnings , Director : director } = movie;

  // console.log("Plot is : ");
  // console.log(plot);

  //Your code was showing peding 

  return <section className="single-movie">
    <img src={poster} alt={title} />
    <div className="single-movie-info">
      <h2>{title}</h2>
      <h1>{actors}</h1>
      <p>{plot}</p>
      <h4>{year}</h4>
      <h4>{awards}</h4>
      <h4>{genre}</h4>
      <h4>Box Office : {earnings}</h4>
      <p>Directed by : {director}</p>
      <Link to="/" className="btn">
          Back to Movies
      </Link>
    </div>
  </section>
}

export default SingleMovie
