import { useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

import imgLogo from '../../img/cinemaInfinitoLogo.png'
import imgLogo2 from '../../img/cinemaInfinitoLogo2.png'
import imgLogo3 from '../../img/cinemaInfinitoLogo3.png'

import { BsList } from "react-icons/bs"
import { BsX } from "react-icons/bs"
import { GoPerson } from "react-icons/go"
import { CiShoppingCart } from "react-icons/ci"


export default function Header(){

    // eventos do menu mobile
    const [clickMenuMobile, setClickMenuMobile] = useState(false)
    const [iconMenu, setIconMenu] = useState(CiShoppingCart)
    const [styleMenuMobile, setStyleMenuMobile] = useState("")

    const handleMobileMenu = () => {
        if (!clickMenuMobile) {
          setClickMenuMobile(true)
          setIconMenu(BsX)
          document.body.style.overflow = "hidden"
        } else {
          setStyleMenuMobile("translateX(-100%)")
            setTimeout(() => {
                setStyleMenuMobile("")
                setClickMenuMobile(false)
                setIconMenu(CiShoppingCart)
                document.body.style.removeProperty("overflow")
            }, 500)
        }
      };
    
      const handleClickForaMenuMobile = (click) => {
        let clickOpcaoMenu = click.nodeName === "LI"
        if (
          clickMenuMobile &&
          (!document
            .querySelector(`.${styles.menuOptionsMobile}`)
            .contains(click) ||
            clickOpcaoMenu)
        ) {
          handleMobileMenu()
        }
      };


    // eventos de login e cadastro
    const [clickLogin, setClickLogin] = useState(false)
    const [opacity, setOpacity] = useState(0)

     // evento de clique do ícone usuário e usado no ícone de fechar o modal login também, se aberto fecha e se fechado abre
    const handleLogin = () => {
        if(!clickLogin){
            setClickLogin(true)
            setOpacity(1)
            if(clickMenuMobile){
                handleMobileMenu()
                setTimeout(() => {
                    document.body.style.overflow = 'hidden'
                }, 500)
            } else {
                document.body.style.overflow = 'hidden'
            }
            
        } else {
            setOpacity(0)
            setTimeout(() => {
                setClickLogin(false)
                document.body.style.removeProperty('overflow');
            }, 500)
        }
    }

    const handleClickForaLogin = (click) => {
        if ((!document.querySelector(`.${styles.modalLogin}`).contains(click))) {
            handleLogin();
        }
      };


    return(
        <>
            <header>
                <span className={styles.menuMobile} onClick={(e) => handleMobileMenu(e.target)}><BsList /></span>

                <Link to={`/`} className={styles.containerLogo}>
                    <img className={styles.logo} src={imgLogo3} alt="" />
                </Link>
                <nav className={clickMenuMobile === true ? `${styles.containerMenuMobile}` : ""} onClick={(e) => handleClickForaMenuMobile(e.target)}>
                    <ul className={clickMenuMobile === true ? `${styles.menuOptionsMobile} ${styles.menuOptions}` : `${styles.menuOptionsDesktop} ${styles.menuOptions}`} style={{ transform: styleMenuMobile }}>
                        <li>Programação</li>
                        <li>Em Cartaz</li>
                        <li>Em Breve</li>
                        <li>Pré-Venda</li>
                        <li>Sua Sessão</li>
                    </ul>
                </nav>
                <div className={styles.btnsMenu}>
                    <span className={styles.loginBtn} onClick={handleLogin}><GoPerson /></span>
                    <span>{iconMenu}</span>
                </div>
            </header>

            {/* Setado para aparecer somente se o usuário clicar no ícone de login */}
            {clickLogin && 
                <div className={styles.containerModalLogin} onClick={(e) => handleClickForaLogin(e.target)}>
                    <div className={styles.modalLogin} style={{opacity: opacity}}>
                        <span className={styles.btnCloseLogin} onClick={handleLogin}><BsX /></span>
                        <h2>Faça login para comprar seu ingresso</h2>
                        <form action="">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" id="senha" required/>
                            </div>
                            <input type="submit" value="Entrar" />
                        </form>
                        <p>ou</p>
                        <button className={styles.btnLoginGoogle}>
                            <img src="https://logopng.com.br/logos/google-37.png" alt="google logo" />
                            Continuar com o Google
                        </button>
                        <hr />
                        <p className={styles.cadastro}>
                            Ainda não tem cadastro no cinema ∞?
                            <a href="http://" target="_blank" rel="noopener noreferrer">Crie uma conta.</a>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}