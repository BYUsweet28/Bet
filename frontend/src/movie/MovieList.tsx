import { useEffect, useState } from "react";
import { movie } from "../types/Movie";

function MovieList() {
  const [movieData, setMovieData] = useState<movie[]>([]);

  //pull data from API but only if there have been changes
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  // filtering  JSON data to only include movies that were edited
  const editedMovies = movieData.filter((m) => m.edited);
  // sort movies to be in alphabetical order
  const sortedMovies = editedMovies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  //build table to display JSON data from API
  return (
    <>
      <div className="row">
        <h4>Movie List</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <th>Title</th>
          <th>Category</th>
          <th>Year</th>
          <th>Director</th>
          <th>Rating</th>
          <th>Edited</th>
          <th>LentTo</th>
          <th>Notes</th>
        </thead>
        <tbody>
          {sortedMovies.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.title}</td>
              <td>{m.category}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
