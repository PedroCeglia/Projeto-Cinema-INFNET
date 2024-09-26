import { useState } from 'react';
import './styles.css'

import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";


export default function Header(){

    const [icone, setIcone] = useState(CiShoppingCart)

    const clickMenuMobile = (btn) => {
        let menuOptionsMobile = document.querySelector('.menuOptions')
        menuOptionsMobile.classList.add('open')
        setIcone(BsX)
        console.log(btn.innerHtml)

        document.addEventListener('click', (click) => {
            let displayStyle = window.getComputedStyle(menuOptionsMobile).opacity === '1';
            let cliqueOpcaoMenu = click.target.nodeName === 'LI' && click.target.parentElement.classList.contains('menuOptions')

            if(displayStyle){
                if(!menuOptionsMobile.contains(click.target) || cliqueOpcaoMenu){
                    menuOptionsMobile.classList.remove('open')
                    setIcone(CiShoppingCart)
                }
            }
        })
    }

    return(
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
                <span><GoPerson /></span>
                <span>{icone}</span>
            </div>
        </header>
    )
}