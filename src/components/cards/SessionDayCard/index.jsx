import styles from "./styles.module.css"
import { useChoseSessionContext } from "../../../contexts/ChoseSession"

export default function SessionDayCard({diaSemana, diaMes, mesText, mes, ano}){
    const {setSelectedDate} = useChoseSessionContext()
    const choseTheDate = () => {
        setSelectedDate({diaSemana, diaMes, mesText, ano, mes})
    }
    return (
            <article>
                <button onClick={choseTheDate} className={styles.Container}>
                    <p>{diaSemana}, {diaMes} {mesText}</p>                
                </button>
            </article> 
        )
}