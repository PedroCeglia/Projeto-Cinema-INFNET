import styles from "./styles.module.css"
import ChoiceSession from "../../components/ChoiceSession"

export default function Filme(){
    return <div className={styles.Container}>
        <main className={styles.ContainerMain}>
            <section>Descrição</section>
            <ChoiceSession/>
        </main>
    </div>
}