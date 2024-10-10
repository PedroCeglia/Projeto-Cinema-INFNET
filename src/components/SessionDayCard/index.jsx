import styles from "./styles.module.css"
import { useChoseSessionContext } from "../../contexts/ChoseSession"

export default function SessionDayCard({diaSemana, diaMes, mes, ano}){
    const {setSelectedDate} = useChoseSessionContext()
    const choseTheDate = () => {
        setSelectedDate({diaSemana, diaMes, mes, ano})
    }
    return (
            <article>
                <button onClick={choseTheDate} className={styles.Container}>
                    <p>{diaSemana}, {diaMes} {mes}</p>                
                </button>
            </article> 
        )
}