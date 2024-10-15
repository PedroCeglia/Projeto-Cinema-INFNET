import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function FilmeCard({
    titulo = "", 
    imageSrc = "https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fimages%2Fcms%2FmoviePoster%2FMoviePoster-d37b9a19-e4f3-4c37-a6c5-ad074b0f9933.png&w=1920&q=100", 
    genero = "Drama", 
    indicacao = 16,
    idFilme = 123456
}){

    let coresIndicacao = {
        10: '#4193D5',
        12: '#F2C346',
        14: '#E6883C',
        16: '#D9382F',
        18: '#12100D',
        L: '#4AA35A'
    }


    const corIndicacao = (indicacao) => {
        let indexCor = Object.keys(coresIndicacao).indexOf(String(indicacao))
        return Object.values(coresIndicacao)[indexCor]
    }
    
    return(
        <article>
            <Link to={`/filme/${idFilme}`} className={styles.card}>
                <img src={imageSrc} alt={titulo} />
                <div className={styles.infos}>
                <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.genero}>{genero}</p>
                    <p className={styles.duracao}>102m</p>
                    <p className={styles.indicacao} style={{backgroundColor: corIndicacao(indicacao)}}>{indicacao}</p>
                </div>
            </Link>
        </article>
    )
}