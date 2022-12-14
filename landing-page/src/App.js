import styles from "./modules/App.module.css";
import { MoviesGrid } from "./components/MoviesGrid";
import { MoviesPage} from "./components/MoviesPage";
import { MovieDetails } from "./components/MovieDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//IN THIS APLICATION REACT READING APP.JS WITH PRINCIPAL CLASS AND WE ARE TRYING
//COMPILATING IN INDEX.JS

/**
 * The App function returns a div with a class of contenedor, an h1 with the value of the props.titulo,
 * and an h3 with the value of the props.children.
 * @param props - It's an object that contains all the properties that are passed to the component.
 * @returns The function App is being returned.
 */
export default function App() {
  return (
    <Router>
      <header>
      <Link to="/home"> <h1 className={styles.titlePage}>Movies</h1> </Link>
      <div className={styles.navegation}>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/movies">Movies</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies" element={<MoviesPage/>}></Route>
          <Route  path="/" element={<h1> error 404</h1>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails/>}></Route>
          <Route exact path="/home" element={<h1>Hello madahomes</h1>} />
        </Routes>
      </main>
    </Router>
  );
}
