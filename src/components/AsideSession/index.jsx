import styles from "./styles.module.css"
import { useSeatAndExtrasContext } from "../../contexts/SeatAndExtras"
import { getDataSession } from "../../utils/Data"

export default function AsideSession({filme, finalPath=""}){
    // Sessão
    const [timestamp, sala, lingua, dimensao] = finalPath.split("-")

    // Filme
    const {backdrop_path, title} = filme || ""
    const imageSrc = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}` 

    // Data
    const { assentos, ingressosList, snacksList} = useSeatAndExtrasContext()

    const {
        diaFormatado, 
        horaFormatada, 
        minutoFormatada, 
        diaSemana, 
        mesText
    } = getDataSession(timestamp)



    return (
    <aside className={styles.container}>
        <ul className={styles.itensList}>
            <li className={styles.item}>
                <div className={styles.imageContainer}>
                    <img src={imageSrc}/> 
                </div>
                <span className={styles.itemSpan}>{title}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.imageContainer}>{diaFormatado}</span> 
                <span className={styles.itemSpan}>{diaSemana}, {diaFormatado} {mesText}</span>
            </li>
            <li className={styles.item}>
                <div className={styles.imageContainer}>
                    <img src="https://i.imgur.com/75QzeAt.png"/> 
                </div>
                <ul>
                    <li><span className={styles.itemSpan}>{horaFormatada}H{minutoFormatada}</span></li>
                    <li><span className={styles.itemSpan}>{dimensao} - {lingua}</span></li>
                </ul>
            </li>
            <li className={assentos.length > 0 ? styles.item : styles.hidden}>
                <div className={styles.imageContainer}>
                    <img src="https://i.imgur.com/HHlej8s.png"/> 
                </div>
                <span className={styles.itemSpan}>
                    {
                        assentos.map(assento => <span key={assento}> {assento} </span>)
                    }
                </span>
            </li>
            <li className={ingressosList.length > 0 ? styles.item : styles.hidden}>
                <div className={styles.imageContainer}>
                    <img src="https://i.imgur.com/Q1j7DCo.png"/> 
                </div>
                <ul>
                    {
                        ingressosList.map((ingresso, key) => (
                        <li key={key}>
                            <span className={styles.itemSpan}>
                                1 INGRESSO {ingresso.type.toUpperCase()}
                            </span>
                        </li>
                    ))
                    }
                </ul>
            </li>
            <li className={snacksList.length > 0 ? styles.item : styles.hidden}>
                <div className={styles.imageContainer}>
                    <img src="https://i.imgur.com/nlzFouK.png"/> 
                </div>
                <span className={styles.itemSpanSnacks}>{snacksList.map((snack, key) => <span key={key}>1 {snack.title}</span>)}</span>
            </li>
        </ul>
    </aside>            
)
}