import { useState } from "react";
import { data } from "./services/fakeMovieService";
import MoviesTable from "./components/MoviesTable";
import Pagination from "./components/Pagination";
import { compareValues } from "./components/Sort";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(3);
  console.log(movies)

  const handleSort = (key, order) => {
    if (key === "id") {
      return setMovies([...movies.sort(compareValues(key, order))]);
    }
    if (key === "title") {
      return setMovies([...movies.sort(compareValues(key, order))]);
    }
    if (key === "genre") {
      return setMovies([...movies.sort(compareValues(key, order))]);
    }
    if (key === "numberInStock") {
      return setMovies([...movies.sort(compareValues(key, order))]);
    }
    if (key === "rate") {
      return setMovies([...movies.sort(compareValues(key, order))]);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMoive = indexOfLastMovie - moviesPerPage;
  const currentMovie = movies.slice(indexOfFirstMoive, indexOfLastMovie);

  return (
    <div className="container text-center">
      <h1>Movies Table</h1>
      <MoviesTable
        currentMovie={currentMovie}
        movies={movies}
        handleSort={handleSort}
        setMovies={setMovies}
      />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
