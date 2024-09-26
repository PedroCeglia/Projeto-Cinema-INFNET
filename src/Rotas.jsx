import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "./App"

const rotasCinema = [
    {
        path:"/cinemas",
        element:<h1>Cinemas: Escolher Cinema</h1>
    },
    {
        path:"/cinema/:cinemaId",
        element:<h1>Cinema: Escolher Filme</h1>
    },
    {
        path:"/cinema/:cinemaId/:filmeId",
        element:<h1>Cinema: Filme: Escolher Sessão</h1>,
    },
    {
        path:"/cinema/:cinemaId/:filmeId/:sessaoId",
        element:<h1>Cinema: Filme: Sessão: Escolher Ascentos</h1>
    }
]
const rotasFilmes = [
    {
        path:"/filme/:filmeId",
        element:<h1>Filme: Escolher Cinema</h1>
    },
    {
        path:"/filme/:filmeId/:cinemaId",
        element:<h1>Filme: Cinema: Escolher Sessão</h1>
    },
    {
        path:"/filme/:filmeId/:cinemaId/:sessaoId",
        element:<h1>Filme: Cinemas: Sessão: Escolher Ascentos</h1>
    },
]

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    ...rotasCinema,
    ...rotasFilmes,
    {
        path:"*",
        element:<h1>Nenhuma pagina foi encontrada!</h1>
    }

])
export default function Rotas(){
    return <RouterProvider router={router}/>
}