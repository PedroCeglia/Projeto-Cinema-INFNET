import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import PopularFilms from './components/FeatchData/test'

import './styles.css'

export default function App(){
    return(
        <div className="App">
            <Header />
            <div className="containerCards">
                <PopularFilms />
            </div>
            <Footer/>
        </div>
    )
}