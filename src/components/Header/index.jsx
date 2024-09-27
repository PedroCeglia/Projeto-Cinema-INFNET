import { useState } from 'react';
import './styles.css'

import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";


export default function Header(){

    // eventos do menu mobile
    const [icone, setIcone] = useState(CiShoppingCart)

    const clickMenuMobile = (btn) => {
        let menuOptionsMobile = document.querySelector('.menuOptions')
        menuOptionsMobile.classList.add('open')
        setIcone(BsX)
        document.body.style.overflow = 'hidden';

        document.addEventListener('click', (click) => {
            let displayStyle = window.getComputedStyle(menuOptionsMobile).opacity === '1';
            let cliqueOpcaoMenu = click.target.nodeName === 'LI' && click.target.parentElement.classList.contains('menuOptions')

            if(displayStyle){
                if(!menuOptionsMobile.contains(click.target) || cliqueOpcaoMenu){
                    menuOptionsMobile.classList.remove('open')
                    setIcone(CiShoppingCart)
                    document.body.style.removeProperty('overflow');
                }
            }
        })
    }

    // eventos de login e cadastro
    const [clickLogin, setClickLogin] = useState(false)
    const [opacity, setOpacity] = useState(0)

    const handleLogin = () => {
        if(!clickLogin){
            setClickLogin(true)
            setOpacity(1)
            document.body.style.overflow = 'hidden';

            // document.addEventListener('click', (click) => {
            //     let modalLogin = document.querySelector('.modalLogin')
            //     let bodyStyle = window.getComputedStyle(document.body).overflow === 'hidden'
            //     console.log(bodyStyle)
            //     if(bodyStyle){
            //         console.log(click.target)
            //         if(!modalLogin.contains(click.target)){
            //             console.log('fora')
            //             setClickLogin(false)
            //             document.body.style.removeProperty('overflow');
            //         } else {
            //             console.log('dentro')
            //         }
            //     }
            // })

        } else {
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
                <span className='menuMobile' onClick={(e) => clickMenuMobile(e.target)}><BsList /></span>
            
                <h1>Cinema ∞</h1>
                <nav>
                    <ul className='menuOptions'>
                        <li>Programação</li>
                        <li>Em Cartaz</li>
                        <li>Em Breve</li>
                        <li>Pré-Venda</li>
                        <li>Sua Sessão</li>
                    </ul>
                </nav>
                <div className='btnsMenu'>
                    <span onClick={handleLogin}><GoPerson /></span>
                    <span>{icone}</span>
                </div>
            </header>

            {clickLogin && 
                <div className="containerModalLogin">
                    <div className="modalLogin" style={{opacity: opacity}}>
                        <span className='btnCloseLogin' onClick={handleLogin}><BsX /></span>
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
                        <button className='btnLoginGoogle'>
                            <img src="https://logopng.com.br/logos/google-37.png" alt="google logo" />
                            Continuar com o Google
                        </button>
                        <hr />
                        <p className='cadastro'>
                            Ainda não tem cadastro no cinema ∞?
                            <a href="http://" target="_blank" rel="noopener noreferrer">Crie uma conta.</a>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}