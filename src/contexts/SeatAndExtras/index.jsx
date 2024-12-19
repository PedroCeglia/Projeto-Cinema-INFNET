import { createContext, useContext } from "react";
import { useState } from "react";
import {formatarData, formatarDataNumericaParaString} from "../../utils/Data"
import {getDataInLocalStorage, setDataInLocalStorage} from "../../utils/LocalStorage"


const SeatAndExtras = createContext({})

export default function SeatAndExtrasProvider({children}){
    const [assentos, setAssentos] = useState([])
    const [ingressosList, setIngressosList] = useState([])
    const [snacksList, setSnacksList] = useState([])

    const addAssento = (idAssento) => {
        setAssentos(x => [...x, idAssento])
    }

    const removeAssento = (idAssento) => {
        setAssentos(x => x.filter(assento => assento != idAssento))
    }

    const addIngressoType = (ingresso) => {
        if(ingressosList.length < assentos.length){
            setIngressosList(x => [...x, ingresso])
        }
    }
    const removeIngressoType = (ingresso) => {
        let hasRemove = false
        const listaNova = [] 
        ingressosList.forEach(item => {
            if(item.type == ingresso.type && !hasRemove ){
                hasRemove = true
            } else {
                listaNova.push(item)
            }
        })
        setIngressosList(listaNova)
    }

    const addSnack = (snacks) => {
        setSnacksList(x => [...x, snacks])
    }
    const removeSnack = (snack) => {
        let hasRemove = false
        const listaNova = [] 
        snacksList.forEach(item => {
            if(item.title == snack.title && !hasRemove ){
                hasRemove = true
            } else {
                listaNova.push(item)
            }
        })
        setSnacksList(listaNova)
    }

    const savePedidoInLocalStorage = (
        idFilme, 
        timestamp, 
        sala, 
        tipo
    ) => {
        const pedidos = getDataInLocalStorage("pedidos", [])
        const pedido = {
            idFilme, 
            timestamp, 
            sala, 
            tipo, 
            ingressosList, 
            assentos,
            snacksList   
        }
        setDataInLocalStorage("pedidos", [...pedidos, pedido])
    }



    return (
        <SeatAndExtras.Provider value={{
            addAssento, removeAssento, assentos,
            addIngressoType, removeIngressoType, ingressosList,
            addSnack, removeSnack, snacksList,
            savePedidoInLocalStorage
            }}>
            {children}
        </SeatAndExtras.Provider>
    )
}

export const useSeatAndExtrasContext = () => useContext(SeatAndExtras)