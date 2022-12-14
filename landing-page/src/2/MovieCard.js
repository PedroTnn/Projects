import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
  const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <li className={styles.movieCard}>
        <img
          src={imageURL}
          alt={movie.title}
          className={styles.movieImage}
        ></img>
        <div>{movie.title}</div>
      </li>
    </div>
  );
}
