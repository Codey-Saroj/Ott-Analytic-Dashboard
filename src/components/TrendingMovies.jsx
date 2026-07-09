import movies from "../data/movies.json";
import { TrendingUp } from "lucide-react";

function TrendingMovies({ search }) {

const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="movie-section">

<h2>
  <TrendingUp size={22}/>
  Trending Movies
</h2>

<div className="movie-grid">

{
filteredMovies.map((movie) => (

<div
    key={movie.id}
    className="movie-card"
>

<img
src={movie.poster}
alt={movie.title}
/>

<p>{movie.title}</p>

</div>
))
}

</div>

</div>

)

}

export default TrendingMovies;