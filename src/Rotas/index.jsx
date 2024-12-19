import {createBrowserRouter, RouterProvider} from "react-router-dom"
import EstruturaPagina from "../pages/EstruturaPagina"
import Home from "../pages/Home"
import Filme from "../pages/Filme"
import Pedidos from "../pages/Pedidos"
import Session from "../pages/Session"
import ChooseSeat from "../components/choose/ChooseSeat"
import ChooseIngresso from "../components/choose/ChooseIngresso"
import ChooseExtras from "../components/choose/ChooseExtras"

const rotasFilmes = [
    {
        path:"/filme/:filmeId",
        element:<Filme/>
    },
    {
        path:"/filme/:filmeId/:sessaoId",
        element:<Session/>,
        children:[
            {
                path:"",
                element:<ChooseSeat/>
            },
            {
                path:"extras",
                element:<ChooseExtras/>
            },
            {
                path:"tipo-ingresso",
                element:<ChooseIngresso/>
            }
        ]
    },

]

const router = createBrowserRouter([
    {
        path:"/",
        element:<EstruturaPagina/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }, ...rotasFilmes,
            {
                path:"/pedidos",
                element:<Pedidos/>
            }
        ]
    },
    {
        path:"*",
        element:<h1>Nenhuma pagina foi encontrada!</h1>
    }

])
export default function Rotas(){
    return <RouterProvider router={router}/>
}