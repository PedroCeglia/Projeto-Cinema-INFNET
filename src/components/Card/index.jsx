import './styles.css'

export default function Card(){

    let coresIndicacao = {
        10: '#4193D5',
        12: '#F2C346',
        14: '#E6883C',
        16: '#D9382F',
        18: '#12100D',
        L: '#4AA35A'
    }

    let filme = {
        titulo: 'Coringa: Delírio a Dois ',
        genero: 'Drama',
        duracao: '102m',
        indicacao: 10
    }

    const corIndicacao = (indicacao) => {
        let indexCor = Object.keys(coresIndicacao).indexOf(String(indicacao))
        return Object.values(coresIndicacao)[indexCor]
    }

    return(
        <div className="card">
            <img src="https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fimages%2Fcms%2FmoviePoster%2FMoviePoster-d37b9a19-e4f3-4c37-a6c5-ad074b0f9933.png&w=1920&q=100" alt={filme.titulo} />
            <div className="infos">
            <h3 className='titulo'>{filme.titulo}</h3>
                <p className="genero">Drama</p>
                <p className="duracao">102m</p>
                <p className="indicacao" style={{backgroundColor: corIndicacao(filme.indicacao)}}>{filme.indicacao}</p>
            </div>
        </div>
    )
}