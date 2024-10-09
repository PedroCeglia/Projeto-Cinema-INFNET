import {createBrowserRouter, RouterProvider} from "react-router-dom"
import EstruturaPagina from "../pages/EstruturaPagina"
import Home from "../pages/Home"
import Filme from "../pages/Filme"

const rotasFilmes = [
    {
        path:"/filme/:filmeId",
        element:<Filme/>
    },
    {
        path:"/filme/:filmeId/:sessaoId",
        element:<h1>Filme: Sessão: Escolher Assento</h1>
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
            }, ...rotasFilmes
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