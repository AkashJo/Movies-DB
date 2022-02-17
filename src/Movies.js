import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => { 

  const { movies  , loading } = useGlobalContext();
  // console.log(data); //Once we have our context , then anywhere in my application I can use the prop

  if(loading) {
    return <div className="loading"></div>
  }

  return <section className="movies">
    {movies.map((item) => {
      //console.log(item);
      const {imdbID : id , Poster : poster , Title : title , Year : year} = item ;

      //{Title: "Sup Bro", Year: "2015", imdbID: "tt7875436", Type: "movie", Poster: "N/A"}
      //Once in a while if the movie appears in search but does not have a poster ie.e. Poster : "N/A"
      //Then handling of this must be done like below

      return <Link to={`/movies/${id}`} key={id} className="movie">
        <article>
          <img src={poster === 'N/A' ? url : poster} alt={title}></img>  
          <div className="movie-info"> 
            <h4 className="title">{title}</h4>
            <p>{year}</p>
          </div>
        </article>
      </Link>
    }) }
  </section>
}

export default Movies
