import styles from "./EstruturaPagina.module.css"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function EstruturaPagina(){
    return (
        <div className={styles.Container}>
            <Header/>
            <Outlet className={styles.Content}/>
            <Footer/>
        </div>
    )
}