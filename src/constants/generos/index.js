const generosList = [
    {id:28, name:"Ação", icon:"https://i.imgur.com/pD140Hx.png"},
    {id:12, name:"Aventura", icon:"https://i.imgur.com/9HQW9uJ.png"},
    {id:16, name:"Animação", icon:"https://i.imgur.com/34RbLXv.png"},
    {id:35, name:"Comédia", icon:"https://i.imgur.com/RyxBRj4.png"},
    {id:80, name:"Crime", icon:"https://i.imgur.com/2wAPuQN.png"},
    {id:99, name:"Documentário", icon:"https://i.imgur.com/vFdYgPS.png"},
    {id:18, name:"Drama", icon:"https://i.imgur.com/IyWpV3K.png"},
    {id:10751,name:"Família", icon:"https://i.imgur.com/LePbLId.png"},
    {id:14, name:"Fantasia", icon:"https://i.imgur.com/rb4K02T.png"},
    {id:36, name:"História", icon:"https://i.imgur.com/3KMTK0d.png"},
    {id:27, name:"Terror", icon:"https://i.imgur.com/FPSeh1A.png"},
    {id:10402, name:"Musical", icon:"https://i.imgur.com/Vo2w8j5.png"},
    {id:9648, name:"Mistério", icon:"https://i.imgur.com/Ze93Gl7.png"},
    {id:10749, name:"Romance", icon:"https://i.imgur.com/8BRzwrQ.png"},
    {id:878, name:"Ficção Ciêntifica", icon:"https://i.imgur.com/R6clgji.png"},
    {id:10770, name:"Programa de TV", icon:"https://i.imgur.com/fAtJvH8.png"},
    {id:53, name:"Trailer", icon:"https://i.imgur.com/0PoRbgQ.png"},
    {id:10752,name:"Guerra", icon:"https://i.imgur.com/7LTQM7R.png"},
    {id:37, name:"Ocidental", icon:"https://i.imgur.com/fkZf49c.png"}
]

export const getGenerosByIdGenerosList = (filmesGenerosList) => {
    return filmesGenerosList.map(filmeGenero => {
        const listaFiltrada = generosList.filter(genero => genero.id == filmeGenero.id)
        return listaFiltrada.length > 0 ? listaFiltrada[0] : {id:filmeGenero.id, name:"Não encontrado", icon:null}
    })
}