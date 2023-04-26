import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api/index";
import "./App.css";

const App = () => {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovieList(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovieList.map((movie, i) => {
      return (
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt={movie.title} className="Movie-image" />
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      );
    });
  };

  const search = async(q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovieList(query.results);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Movie Mania</h1>
        <input type="text" placeholder="Cari Film Kesayangan" className="Movie-search" onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
        <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
