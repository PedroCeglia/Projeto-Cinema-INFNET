import styles from "./styles.module.css"
import {getTimestamp} from "../../../utils/Data"
import { Link, useLocation } from "react-router-dom"

export default function SessionCard({
    diaText, dia, mes, mesText, ano, hora, 
    sala, lingua, dimensao
}){
    const timestamp = getTimestamp(
        parseInt(dia), 
        parseInt(mes), 
        parseInt(ano), 
        parseInt(hora.split(":")[0]),
        parseInt(hora.split(":")[1])
    )
    const idFilme = useLocation().pathname.split("/")[2]
    const url = `/filme/${idFilme}/${timestamp}-${sala}-${lingua}-${dimensao}`
    
    return (
        <Link to={url} style={{textDecoration:"none"}}>
            <article>
                <button className={styles.Container}>
                    <p>{diaText}, {dia} {mesText}</p>
                    <p>{hora}</p>
                </button>
            </article>
        </Link>
        
    )
}