import movies from "../data/movies.json";

function ContentTable({ search }) {

  

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-section">
      <h2>Recently Added Content</h2>

      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <img
                  src={movie.poster}
                  width="50"
                  alt={movie.title}
                />
              </td>

              <td>{movie.title}</td>

              <td>{movie.genre}</td>

              <td>{movie.rating}</td>

              <td>{movie.status}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ContentTable;