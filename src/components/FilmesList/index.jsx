import styles from "./FilmesList.module.css"
import Card from "../Card"
export default function FilmesList({listaFilmes, title=""}){
    return (
        <section className={styles.FilmesContainer}>
            {title != "" && <h3>{title}</h3>}
            <div className={styles.FilmesContainerList}>
                {
                listaFilmes.map((item, key) => {
                    return <Card key={key}/>
                })
            }
            </div>
            
        </section>
    )
}