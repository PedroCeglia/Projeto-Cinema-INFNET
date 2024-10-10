import styles from "./FilmesList.module.css"
import FilmeCard from "../FilmeCard"
export default function FilmesList({listaFilmes, title=""}){
    return (
        <section className={styles.FilmesContainer}>
            {title != "" && <h3>{title}</h3>}
            <div className={styles.FilmesContainerList}>
                {
                listaFilmes.map((item, key) => {
                    return <FilmeCard key={key}/>
                })
            }
            </div>
            
        </section>
    )
}