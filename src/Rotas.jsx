import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Home</h1>
    }
])
export default function Rotas(){
    return <RouterProvider router={router}/>
}