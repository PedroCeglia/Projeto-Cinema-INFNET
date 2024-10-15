import styles from "./styles.module.css"
import ChoiceSession from "../../components/ChoiceSession"
import { useState, useEffect } from "react"

import { FaQuestionCircle } from "react-icons/fa";

export default function Filme(){

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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEY1E5uyX1bU9au2oF74LoFPdthQlmZ5YIQ&s" alt="nome-filme" />
                    <div className={styles.generoDescricao}>
                        <div className={styles.genre}><FaQuestionCircle/> Terror</div> {/*No lugar do ícone é a classificação indicativa*/}
                        <p className={styles.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas recusandae maiores quia nulla accusamus voluptatibus nisi enim, sint laborum ad, tempora ipsum optio nobis assumenda necessitatibus aperiam dignissimos veritatis!</p>
                    </div>
                </div>
                <div className={styles.infos}>
                    <hr />
                    <div>
                        <p>Data de estreia</p>
                        <p>03.10.2024</p>
                    </div>
                    <hr />
                    <div>
                        <p>Distribuído por</p>
                        <p>Warner Bros</p>
                    </div>
                    <hr />
                    <h4>ELENCO E EQUIPE</h4>
                    <div>
                        <p>Diretor</p>
                        <p>Todd Phillips</p>
                    </div>
                    <hr />
                    <div>
                        <p>Elenco</p>
                        <ul>
                            <li>Joaquin Phoenix</li>
                            <li>Lady Gaga</li>
                            <li>Brendan Gleeson</li>
                            <li>Zazie Beetz</li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
        }
        </div>
    )
}