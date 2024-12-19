import styles from "./styles.module.css"
import { useState } from "react"
import { useSeatAndExtrasContext } from "../../../contexts/SeatAndExtras"
import { Link } from "react-router-dom"

const listaFileiras = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K"]
const listaAssentosOcupados = ["K12", "K13", "K14", "C4", "C5", "C6", "C7", "G12", "G13", "E2", "E3", "H14"]

export default function ChooseSeat(){
    const {assentos} = useSeatAndExtrasContext()
    return (
        <main className={styles.container}>
            <h2 className={styles.title}>Escolher Assentos</h2>
            <ul className={styles.listaFileiras}>
                {
                    listaFileiras.map(idFileira => {
                        return (
                            <li key={idFileira}>
                                <FileiraAssentos  idFileira={idFileira}/>
                            </li>
                        )
                    })
                }
            </ul>
            {
                assentos.length > 0 ? ( 
                    <Link className={styles.link} to={`tipo-ingresso`}>CONTINUAR COMPRA</Link> 
                ) : <button className={styles.link}>CONTINUAR COMPRA</button>
            }
            
        </main>
    )
}

const FileiraAssentos = ({idFileira}) => {
    const listaAssentos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    return (
        <div className={styles.containerFileira}>
            <p className={styles.fileiraIndex}>{idFileira}</p>
            <ul className={styles.listaAssentos}>
                {
                    listaAssentos.map(idAssento => {
                        return (
                            <li key={idAssento}>
                                <AssentoCard idFileira={idFileira} idAssento={idAssento} />
                            </li>
                        )   
                    })
                }
            </ul>        
        
        </div>
    )
}
const verificarAssentoValido = (idAssento) => {
    return listaAssentosOcupados.includes(idAssento)
}
const AssentoCard = ({idFileira, idAssento}) => {

    const idFinal = idFileira + idAssento

    const {addAssento, removeAssento, assentos} = useSeatAndExtrasContext()

    // Image
    const [isSelect, setIsSelect] = useState(assentos.includes(idFinal))
    const isValid = !verificarAssentoValido(idFinal)
    const imageSrc = isValid ? "https://i.imgur.com/WAdMaNg.png" : "https://i.imgur.com/iuEEpGV.png"
    const imageFinal = isValid && isSelect ? "https://i.imgur.com/vPtVAZm.png" : imageSrc


    const handleAssento = () => {
        if(isValid && isSelect){
            removeAssento(idFinal)
        } 

        if(isValid && !isSelect){
            addAssento(idFinal)
        } 

        if(isValid)
            setIsSelect(!assentos.includes(idFinal))
    }
    return (
        <button className={styles.containerAssento} onClick={handleAssento}>
            <img src={imageFinal} alt={`Assento ${idFinal}`} title={idFinal}/>
        </button>
    )
}