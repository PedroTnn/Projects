import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
  const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
   
      <li className={styles.movieCard}>
        <Link to={"/movies/"+ movie.id}>
        <img
          src={imageURL}
          alt={movie.title}
          className={styles.movieImage}
        ></img>
        <div>{movie.title}</div>
        </Link>
      </li>
  );
}
