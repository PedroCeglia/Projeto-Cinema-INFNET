import './styles.css'

export default function Card({titulo = "", imageSrc = "", genero = "Drama", indicacao = 16}){

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
        <div className="card">
            <div className="img"></div>
            <div className="infos">
            <h3 className='titulo'>{titulo}</h3>
                <p className="genero">Drama</p>
                {/* <p className="separador">●</p> */}
                <p className="duracao">102m</p>
                {/* <p className="separador">●</p> */}
                <p className="indicacao" style={{backgroundColor: corIndicacao(indicacao)}}>{indicacao}</p>
            </div>
        </div>
    )
}