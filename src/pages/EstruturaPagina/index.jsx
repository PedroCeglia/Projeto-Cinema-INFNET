import styles from "./EstruturaPagina.module.css"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MovieDBProvider from "../../contexts/MovieDB"

export default function EstruturaPagina(){
    return (
        <MovieDBProvider>
            <div className={styles.Container}>
                <Header/>
                <Outlet className={styles.Content}/>
                <Footer/>
            </div>
        </MovieDBProvider>
    )
}