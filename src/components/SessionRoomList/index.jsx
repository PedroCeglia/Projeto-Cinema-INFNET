import styles from "./styles.module.css"
import SessionCard from "../SessionCard"
import { useChoseSessionContext } from "../../contexts/ChoseSession"

export default function SessionRoomList(){

    const { selectedDate } = useChoseSessionContext()
    const {diaSemana, diaMes, mes, ano} = selectedDate
    const listaHorarios = ["14:00","16:00","18:00","20:00","22:00"]

    const listaSalas = [
        {dimensao:"2D", vip:"VIP", lingua:"Dublado", sala:"1"},
        {dimensao:"2D", vip:"Normal", lingua:"Dublado", sala:"2"},
        {dimensao:"3D", vip:"Normal", lingua:"Dublado", sala:"3"},
        {dimensao:"2D", vip:"VIP", lingua:"Legendado", sala:"4"},
        {dimensao:"3D", vip:"VIP", lingua:"Legendado", sala:"5"},
        {dimensao:"3D", vip:"Normal", lingua:"Legendado", sala:"6"},

    ]
    return (
        <section className={styles.Container}>
            <h2 className={styles.Title}>Horários</h2>
            {
                listaSalas.map((item, key) => {
                    const {dimensao, vip, lingua, sala} = item
                    return <section className={styles.ContainerRoom} key={key}>
                            <h3 className={styles.RoomTitle}>{dimensao} - {vip} - {lingua} - Sala {sala} </h3>
                            <div className={styles.ContainerSessionCards}>
                                {
                                    listaHorarios.map((hora, key) => (
                                        <SessionCard 
                                            key={key}
                                            diaText={diaSemana}
                                            dia={diaMes}
                                            mes={mes}
                                            ano={ano}
                                            hora={hora}
                                        />
                                    ))
                                }
                            </div>
                        </section>
                })
            }
           
        </section>
    )
}

