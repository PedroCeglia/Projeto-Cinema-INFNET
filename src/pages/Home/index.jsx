import FilmesList from "../../components/listas/FilmesList";
import { useState, useEffect } from "react";
import { useMovieDBContext } from "../../contexts/MovieDB";

export default function Home(){
    const [filmeList, setFilmeList] = useState([])
    const {getFilmeList} = useMovieDBContext()

    useEffect(()=>{getFilmeList(setFilmeList)},[])
    return <FilmesList listaFilmes={filmeList} title="Em Breve"/>
}