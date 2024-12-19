import styles from "./FilmesList.module.css"
import FilmeCard from "../../cards/FilmeCard"
export default function FilmesList({listaFilmes, title=""}){
    return (
        <section className={styles.FilmesContainer}>
            {title != "" && <h3 className={styles.title}>{title}</h3>}
            <div className={styles.FilmesContainerList}>
                {
                listaFilmes.map((item, key) => {
                    const {backdrop_path, title, id, vote_average} = item
                    const urlImage = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`

                    return <FilmeCard key={key} nota={vote_average} imageSrc={urlImage} titulo={title} idFilme={id}/>
                })
            }
            </div>
            
        </section>
    )
}