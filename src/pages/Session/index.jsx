import styles from "./styles.module.css"
import { Outlet, useLocation } from "react-router-dom";
import { getFilmeDescription } from "../../api/MovieDB";
import AsideSession from "../../components/AsideSession"
import { useState, useEffect } from "react";
import SeatAndExtrasProvider from "../../contexts/SeatAndExtras";

export default function Session(){
    
    const [filme, setFilme] = useState()
    const pathname = useLocation().pathname.split("/")

    useEffect(()=>{ getFilmeDescription(pathname[2],setFilme) },[])

    return (
        <SeatAndExtrasProvider>
            <div className={styles.container}>
                <AsideSession filme={filme} finalPath={pathname[3]}/>
                <Outlet/>
            </div>
        </SeatAndExtrasProvider>

    )
}