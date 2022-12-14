import movie from "./movies2.json"
import styles from "../modules/MovieDetails.module.css"
export function MovieDetails() {
    
    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`}  src={imageURL} alt={movie.title}/>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
       <p>
       <strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(', ')}
       </p>
       </div>
        </div>
    );
}