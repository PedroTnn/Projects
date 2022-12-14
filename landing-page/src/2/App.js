import styles from "./modules/App.module.css";
import { MoviesGrid } from "./MoviesGrid";
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
    <div className={styles.backgroundPage}>
      <header>
        <h1 className={styles.titlePage}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
