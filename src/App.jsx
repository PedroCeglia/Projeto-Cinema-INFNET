import Card from './components/Card'
import Header from './components/Header'
import './styles.css'

export default function App(){
    return(
        <div className="App">
            <Header />
            <div className="containerCards">
                <Card />
                <Card />
            </div>
        </div>
    )
}