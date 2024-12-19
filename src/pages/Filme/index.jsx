import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import ChoiceSession from "../../components/choose/ChooseSession"
import { getGenerosByIdGenerosList } from "../../constants/generos"
import { getFilmeDescription, getFilmeElenco } from "../../api/MovieDB";


import { FaQuestionCircle } from "react-icons/fa";

export default function Filme(){
    const pathname = useLocation().pathname

    const [filme, setFilme] = useState(null)
    const [elenco, setElenco] = useState(null)
    useEffect(()=>{
        const idFilme = pathname.split("/")[2]
        getFilmeDescription(idFilme, setFilme)
        getFilmeElenco(idFilme, setElenco)
    },[])

    const {overview, poster_path, genres, release_date, production_companies} = filme || {}
    const imageSrc = poster_path ? ( 
        `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}` 
    ) : (
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEY1E5uyX1bU9au2oF74LoFPdthQlmZ5YIQ&s"
    )
    const listaGeneros = genres ? getGenerosByIdGenerosList(genres) : [{id:0, name:"Terror"}]
    const dataEstreia = release_date ? release_date.split("-") : ["2024", "12", "17"]
    const nomeDistribuidora = production_companies ? production_companies[0].name : "Warner"

    const {cast, crew} = elenco || {cast:[], crew:[]}
    const listaDiretores = removerDuplicadosPorId(crew.filter(pessoa => pessoa.known_for_department == "Directing")).slice(0,4)
    const listaEscritores = removerDuplicadosPorId(crew.filter(pessoa => pessoa.known_for_department == "Writing")).slice(0,4)
    const listaProdutores = removerDuplicadosPorId(crew.filter(pessoa => pessoa.known_for_department == "Production")).slice(0,4)

    const listaAtores = removerDuplicadosPorId(cast.slice(0,5))

    function removerDuplicadosPorId(lista) {
        const idsVistos = new Set(); 
        const resultado = [];
      
        for (const item of lista) {
          if (!idsVistos.has(item.id)) {
            idsVistos.add(item.id); 
            resultado.push(item);  
          }
        }
      
        return resultado;
    }

    const [clickHorarioOption, setClickHorarioOption] = useState(true)
    const [clickSobreOption, setClickSobreOption] = useState(false)

    const handleClickOptionMobile = (click) => {
        let clique = click.innerText.toLowerCase()
        if(clique === 'horários'){
            setClickHorarioOption(true)
            setClickSobreOption(false)
        } else {
            setClickHorarioOption(false)
            setClickSobreOption(true)
        }
    }

    const selectedOptionStyle = {
        color: '#fff',
        fontWeight: 600,
        borderColor: '#fff'
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const handleWindowSizeChange = () => {
        setScreenWidth(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])


    return (
    <div className={styles.container}>
        {screenWidth < 1024 &&
            <div className={styles.pageSelectionMobile}>
                <p onClick={(e) => handleClickOptionMobile(e.target)} style={clickHorarioOption === true ? selectedOptionStyle : {}}>Horários</p>
                <p onClick={(e) => handleClickOptionMobile(e.target)} style={clickSobreOption === true ? selectedOptionStyle : {}}>Sobre o Filme</p>
            </div>
        }
        {(clickHorarioOption || screenWidth >= 1024) &&
            <div className={styles.containerHorarios}>
                <ChoiceSession/>
            </div>
        }
        {(clickSobreOption || screenWidth >= 1024) &&
            <div className={styles.containerFilmeInfo}>
                <div className={styles.imagemDescricao}>
                    <img src={imageSrc} alt="nome-filme" />
                    <div className={styles.generoDescricao}>
                        {
                            listaGeneros.map((genero) => {
                                return (
                                    <div className={styles.genre} key={genero.id}>
                                        {genero.icon ? <img src={genero.icon}/> : <FaQuestionCircle/>} 
                                        <span>{genero.name || "Terror"}</span>
                                    </div>
                                )
                            })
                        }
                        <p className={styles.descricao}>{overview}</p>
                    </div>
                </div>
                <div className={styles.infos}>
                    <hr />
                    <div>
                        <p>Data de estreia</p>
                        <p>{dataEstreia[2]} / {dataEstreia[1]} / {dataEstreia[0]}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Distribuído por</p>
                        <p>{nomeDistribuidora}</p>
                    </div>
                    <hr />
                    <h4>ELENCO E EQUIPE</h4>
                    <div className={styles.diretoresContainer}>
                        <p><span>Diretor(es)</span> <span>{listaDiretores.length < 1 && "-----------"}</span></p>
                        <div className={styles.diretoresList}>
                        {
                            listaDiretores.map(diretor => <p key={diretor.id}>{diretor.name}</p>)
                        }
                        </div>

                        <p><span>Escritores</span> <span>{listaEscritores.length < 1 && "-----------"}</span></p>
                        <div className={styles.diretoresList}>
                        {
                            listaEscritores.map(escritor => <p key={escritor.id}>{escritor.name}</p>)
                        }
                        </div>

                        <p><span>Produção</span> <span>{listaProdutores.length < 1 && "-----------"}</span></p>
                        <div className={styles.diretoresList}>
                        {
                            listaProdutores.map(produtor => <p key={produtor.id}>{produtor.name}</p>)
                        }
                        </div>
                    </div>
                    <hr />
                    <div className={styles.atoresContainer}>
                        <p>Elenco</p>
                        <ul className={styles.atoresList}>
                            {
                                listaAtores.map(ator => (
                                <li key={ator.id}>
                                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${ator.profile_path}`} alt={ator.name}/>
                                    <span>{ator.name}</span>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
        }
        </div>
    )
}