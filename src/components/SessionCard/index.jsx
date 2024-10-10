import styles from "./styles.module.css"

export default function SessionCard({diaText, dia, mes, ano, hora}){
    return <article>
        <button className={styles.Container}>
            <p>{diaText}, {dia} {mes}</p>
            <p>{hora}</p>
        </button>
    </article>
}