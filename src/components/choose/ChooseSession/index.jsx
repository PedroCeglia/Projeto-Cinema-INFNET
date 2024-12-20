import styles from "./styles.module.css"
import { useEffect, useState } from "react"

import SessionDayCard from "../../cards/SessionDayCard"
import SessionRoomList from "../../listas/SessionRoomList"

import { getDiasList } from "../../../utils/Data"
import ChoseSessionProvider from "../../../contexts/ChoseSession"

export default function ChoiceSession(){
    const [diasList, setDiasLista] = useState([])

    useEffect(()=>{
        const listaDatas = getDiasList()
        setDiasLista(listaDatas)
    },[])

    return(
        <ChoseSessionProvider>
            <section className={styles.Container}>
                <div className={styles.ContainerDias}>
                    {
                        diasList.map((item, key) => {
                            const {diaMes, diaSemana, mesText, ano, mes} = item
                            return <SessionDayCard 
                                key={key}
                                diaMes={diaMes}
                                diaSemana={diaSemana}
                                ano={ano}
                                mesText={mesText}
                                mes={mes}
                            />
                        })
                    }
                </div>
                <SessionRoomList/>
            </section>
        </ChoseSessionProvider>  
    )

}