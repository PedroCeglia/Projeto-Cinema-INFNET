import styles from "./styles.module.css"
import useLocalStorage from "../../hooks/useLocalStorage"
import { getFilmeDescription } from "../../api/MovieDB"
import { useEffect, useState } from "react"
import { getDataSession } from "../../utils/Data"

export default function Pedidos(){
    const [pedidos, setPedidos] = useLocalStorage("pedidos", [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Compras</h1>
            <ul className={styles.listaPedidos}>
                {
                    pedidos.map((pedido, key) => (
                        <PedidoCard 
                            key={`${pedido.idFilme} - ${pedido.timestamp} - ${key}`} 
                            pedido={pedido}
                        />)
                    )
                }
            </ul>
        </div>
    )

}

const PedidoCard = ({pedido}) => {
    const {
        idFilme, 
        timestamp, 
        sala, 
        tipo, 
        ingressosList, 
        assentos,
        snacksList
    } = pedido || {}

    const [filme, setFilme] = useState(null)
    useEffect(()=>{getFilmeDescription(idFilme, setFilme)},[])
    const {title} = filme || "Não encontrado"

    const {
        diaFormatado, 
        horaFormatada, 
        minutoFormatada, 
        diaSemana, 
        mesText
    } = getDataSession(timestamp)

    return (
        <li className={styles.containerPedido}>
            <h2 className={styles.titlePedido}>Nome do Filme: {title}</h2>
            <div className={styles.subContainerRow}>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Data:</span>
                    <p>{diaSemana}, {diaFormatado} {mesText}</p>
                    <p>{horaFormatada}:{minutoFormatada}</p>
                </div>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Sala</span>
                    <p>Sala: {sala}</p>
                </div>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Tipo de filme:</span>
                    <p>Dimensao: {tipo}</p>
                </div>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Assentos:</span>
                    <p>
                        {
                            assentos.map(assento => <span key={assento}>  {assento}  </span>)
                        }
                    </p>
                </div>
            </div>
            <div className={styles.subContainerRow}>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Tipo do(s) Ingresso(s):</span>
                    {
                        ingressosList.map((ingresso, key) => <p key={key}>Ingresso {ingresso.type}</p>)
                    }
                </div>
                <div className={styles.subContainerPedido}>
                    <span className={styles.labelPedido}>Snacks escolhidos:</span>
                    <p>Combo G</p>
                    <p>Refrigerante G</p>
                </div>
            </div>

        </li>
    )
}