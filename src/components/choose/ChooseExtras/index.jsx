import styles from "./styles.module.css"
import { useSeatAndExtrasContext } from "../../../contexts/SeatAndExtras"
import { useNavigate, useLocation } from "react-router-dom"

const listaPicoca = [
    {title:"Pipoca G", type:"Pipocas", imageSrc:"https://i.imgur.com/fqxyhka.png", price:50},
    {title:"Pipoca M", type:"Pipocas", imageSrc:"https://i.imgur.com/tdhsX1v.png", price:40},
    {title:"Pipoca P", type:"Pipocas", imageSrc:"https://i.imgur.com/U4FBHmR.png", price:30},
]

const listaRefrigerante = [
    {title:"Refrigerante G", type:"Refrigerantes", imageSrc:"https://i.imgur.com/EwfhBMs.png", price:20},
    {title:"Refrigerante M", type:"Refrigerantes", imageSrc:"https://i.imgur.com/rB8LI17.png", price:15},
    {title:"Refrigerante P", type:"Refrigerantes", imageSrc:"https://i.imgur.com/YF4zIGk.png", price:10},
]

const listaCombo = [
    {title:"Combo Grande", type:"Combos", imageSrc:"https://i.imgur.com/fwAGmhU.png", price:60},
    {title:"Combo Médio", type:"Combos", imageSrc:"https://i.imgur.com/dSv84ji.png", price:50},
    {title:"Combo Pequeno", type:"Combos", imageSrc:"https://i.imgur.com/h2MswJu.png", price:35},
]
 
const listaSnacks = [listaCombo, listaPicoca, listaRefrigerante]


export default function ChooseExtras(){
    const navigate = useNavigate()
    const pathname = useLocation().pathname.split("/")

    const idFilme = pathname[2]
    const [timestamp, sala, lingua, dimensao] = pathname[3].split("-")

    const {savePedidoInLocalStorage} = useSeatAndExtrasContext()

    const confirmarPedido = () => {
        // salvar pedido no localstorage
        savePedidoInLocalStorage(
            idFilme, 
            timestamp, 
            sala, 
            dimensao
        )
        navigate("/")
    }
    return (
        <main className={styles.container}>
            <h2 className={styles.title}>Escolha seus Snacks</h2>

            {
                listaSnacks.map((snackList, key) => {
                    return <SnackList snackList={snackList} key={key}/>
                })
            }
            <button className={styles.link} onClick={confirmarPedido}>
                CONFIRMAR RESERVA
            </button> 

        </main>
    )
}

const SnackList = ({snackList}) => {
    const type = snackList[0].type 
    return (
        <section className={styles.containerSnackList}>
            <h3 className={styles.titleSnackList}>{type}</h3>
            <ul className={styles.snackList}>
                {
                    snackList.map((snack, key) => {
                        return <li key={key}><SnackCard snack={snack}/></li>
                    })
                }
            </ul>
        </section>
    )
}

const SnackCard = ({snack}) => {
    const {snacksList, addSnack, removeSnack} = useSeatAndExtrasContext()
    const {title, price, imageSrc, type} = snack

    const addSnackItem = () => {
        addSnack({title, price, type})
    }
    const removeSnackItem = () => {
        if(snacksList.length > 0)
            removeSnack({title, price, type})
    }

    const itemList = snacksList.filter(item => item.title ==  title)

    return (
        <article className={styles.containerSnack}>
            <img className={styles.imageSnack} src={imageSrc} alt={title}/>
            <div className={styles.subContainerSnack}>
                <div className={styles.containerTextSnacks}>
                    <span className={styles.titleSnack}>{title}</span>
                    <span className={styles.priceSnack}>R$ {price}</span>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={addSnackItem}>+</button>
                    <span>{itemList.length}</span>
                    <button onClick={removeSnackItem}>-</button>
                </div>
            </div>
        </article>
    )
} 