import { useEffect, useState } from 'react';
import './App.css';
import { getMovielist, searchMovie } from "./api"


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getMovielist(100).then((results) => {
      setPopularMovies(results)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${ process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (query) => {
    const results = await searchMovie(query);
    setPopularMovies(results);
  }

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    search(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
      
          <div className="Navbar-title">TV Daniel</div>
          <input
            placeholder="Search Film..."
            className="Movie-search"
            value={searchQuery}
            onChange={handleSearchInputChange} />
        </div>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
