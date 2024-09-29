import { useState } from 'react';
import styles from './styles.module.css'

import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";


export default function Header(){

    // eventos do menu mobile
    const [clickMenuMobile, setClickMenuMobile] = useState(false)
    const [icone, setIcone] = useState(CiShoppingCart)
    const [opacity, setOpacity] = useState(0)

    // evento de clique do ícone menu mobile e usado no ícone de fechar o menu mobile também, se aberto fecha e se fechado abre
    const handleClickMenuMobile = () => {
        if(!clickMenuMobile){
            setOpacity(1)
            setClickMenuMobile(true)
            document.body.style.overflow = 'hidden';

        // uso do else pois o clique no btn de fechar o menu chama essa mesma função
        } else {
            setOpacity(0)
            setTimeout(() => {
                setClickMenuMobile(false)
                document.body.style.removeProperty('overflow');
            }, 300)
        }
    }

    // evento de clique na div pai do menu mobile
    const handleClickForaMenuMobile = (click) => {
        let clickOpcaoMenu = click.nodeName === 'LI' && click.parentElement.classList.contains(`${styles.menuOptionsMobile}`)

        // se o target do clique for fora da div com classe menuOptionsMobile ou o target for um de seus Li's, fecha o menu mobile
        if(!document.querySelector(`.${styles.menuOptionsMobile}`).contains(click) || clickOpcaoMenu){
            setOpacity(0)
            setTimeout(() => {
                setClickMenuMobile(false)
                setIcone(CiShoppingCart)
                document.body.style.removeProperty('overflow');
            }, 300)
        }
    }

    // eventos de login e cadastro
    const [clickLogin, setClickLogin] = useState(false)

     // evento de clique do ícone usuário e usado no ícone de fechar o modal login também, se aberto fecha e se fechado abre
    const handleLogin = () => {
        if(!clickLogin){
            setClickLogin(true)
            setOpacity(1)
            document.body.style.overflow = 'hidden';

        // uso do else pois o clique no btn de fechar o modal chama essa mesma função
        } else {
            setOpacity(0)
            setTimeout(() => {
                setClickLogin(false)
                document.body.style.removeProperty('overflow');
            }, 300)
        }
    }

    // evento de clique na div pai do modal login
    const handleClickForaModal = (click) => {
        if(!document.querySelector(`.${styles.modalLogin}`).contains(click)){
            setOpacity(0)
                setTimeout(() => {
                    setClickLogin(false)
                    document.body.style.removeProperty('overflow');
                }, 300)
        }
    }

    return(
        <>
            <header>
                <span className={styles.menuMobile} onClick={handleClickMenuMobile}><BsList /></span>
            
                <h1>Cinema ∞</h1>
                <nav>
                    <ul className={`${styles.menuOptionsDesktop} ${styles.menuOptions}`}>
                        <li>Programação</li>
                        <li>Em Cartaz</li>
                        <li>Em Breve</li>
                        <li>Pré-Venda</li>
                        <li>Sua Sessão</li>
                    </ul>

                    {/* Setado para aparecer somente se o usuário clicar no ícone do menu */}
                    {clickMenuMobile && 
                    <div className={styles.containerMenuOptionsMobile} onClick={(e) => handleClickForaMenuMobile(e.target)}>
                        <ul className={`${styles.menuOptionsMobile} ${styles.menuOptions}`} style={{opacity: opacity}}>
                            <span className={styles.btnCloseMenuMobile} onClick={handleClickMenuMobile}><BsX /></span>
                            <li>Programação</li>
                            <li>Em Cartaz</li>
                            <li>Em Breve</li>
                            <li>Pré-Venda</li>
                            <li>Sua Sessão</li>
                        </ul>
                    </div>
                    }
                </nav>
                <div className={styles.btnsMenu}>
                    <span onClick={handleLogin}><GoPerson /></span>
                    <span>{icone}</span>
                </div>
            </header>

            {/* Setado para aparecer somente se o usuário clicar no ícone de login */}
            {clickLogin && 
                <div className={styles.containerModalLogin} onClick={(e) => handleClickForaModal(e.target)}>
                    <div className={styles.modalLogin} style={{opacity: opacity}}>
                        <span className={styles.btnCloseLogin} onClick={handleLogin}><BsX /></span>
                        <h1>Cinema ∞</h1>
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