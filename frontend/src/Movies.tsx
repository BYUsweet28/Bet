import data from "./MovieData.json";

const MDS = data.MovieData;

function MovieCollection() {
  return (
    <>
      <div>
        <h3>Joel Hilton Movie Club - Movie Collection</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {MDS.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieCollection;
