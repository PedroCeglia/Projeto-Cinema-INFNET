import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles.css'

export default function App(){
    return(
        <div className="App">
            <Header />
            <h1 className='title'>Em Cartaz</h1>
            <div className="containerCards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <h1 className='title'>Lançamentos</h1>
            <div className="containerCards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <h1 className='title'>Em Breve</h1>
            <div className="containerCards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer/>
        </div>
    )
}