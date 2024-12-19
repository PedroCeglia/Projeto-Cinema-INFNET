import styles from "./styles.module.css"
import { Link, useLocation } from "react-router-dom"
import { useSeatAndExtrasContext } from "../../../contexts/SeatAndExtras"

export default function ChooseIngresso(){
    const pathname = useLocation().pathname.split("/").slice(0, 4).join("/")
    const {addIngressoType, removeIngressoType, ingressosList, assentos} = useSeatAndExtrasContext()

    const addInteira = () => {
        addIngressoType({type:"Inteira", preco:60.00})
    }
    
    const addMeia = () => {
        addIngressoType({type:"Meia Entrada", preco:30.00})
    }

    const removeInteira = () => {
        removeIngressoType({type:"Inteira", preco:60.00})
    }
    
    const removeMeia = () => {
        removeIngressoType({type:"Meia Entrada", preco:30.00})
    }

    const listaInteira = ingressosList.filter(ingresso => ingresso.type == "Inteira")
    const listaMeiaEntrada = ingressosList.filter(ingresso => ingresso.type == "Meia Entrada")

    

    return (
        <main className={styles.container}>
            <h2 className={styles.title}>Escolha o tipo dos seus ingressos</h2>
            <p className={styles.listaIngressos}>ingressos: {assentos.map(item => <span key={item}>{`${item} - `}</span>)} ( {assentos.length} )</p>
            <h3 className={styles.subtitle}>Inteira</h3>
            <div className={styles.subContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.label}>Inteira</span>
                    <span className={styles.price}>R$ 60,00</span>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={addInteira}>+</button>
                    <span>{listaInteira.length}</span>
                    <button onClick={removeInteira}>-</button>
                </div>
            </div>

            <h3 className={styles.subtitle}>Meia Entrada</h3>
            <div className={styles.subContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.label}>Meia Entrada</span>
                    <span className={styles.price}>R$ 30,00</span>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={addMeia}>+</button>
                    <span>{listaMeiaEntrada.length}</span>
                    <button onClick={removeMeia}>-</button>
                </div>
            </div>
            {
                ingressosList.length == assentos.length ? ( 
                    <Link className={styles.link} to={`${pathname}/extras`}>CONTINUAR COMPRA</Link> 
                ) : <button className={styles.link}>CONTINUAR COMPRA</button>
            }
        </main>
    )
}