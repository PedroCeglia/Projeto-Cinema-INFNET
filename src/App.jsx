import FilmesList from './components/FilmesList'
import Header from './components/Header'
import Footer from './components/Footer'
import PopularFilms from './components/FeatchData/test'

import './styles.css'

export default function App(){
    return(
        <div className="App">
            <Header />
            <FilmesList listaFilmes={[0,1,2,3,4,5,6,7,8,9,10]} title="Em Breve"/>
            <Footer/>
        </div>
    )
}