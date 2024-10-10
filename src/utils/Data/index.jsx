/* 
*   Retorna uma lista de Dias {diaSemana, diaMes, mes, ano}
*   [hoje, amanha, ..., hoje + 6]  
*/
export function getDiasList(){

    const dataAtual = new Date()

    const lista_datas = []
    for(let i=1; i < 7; i++){
        const novaData = new Date().setDate(dataAtual.getDate() + i)
        lista_datas.push(new Date(novaData))
    }
    
    const lista_datas_formatadas = lista_datas.map((item) => formatarData(item))
    const data_atual_formatada = formatarData(dataAtual, true)
    
    return [data_atual_formatada ,...lista_datas_formatadas]
}

export function getDataAtual(){
    const dataAtual = new Date()
    return formatarData(dataAtual, true)
}

function formatarData(data, isToday=false){
    const listaDias = [
        "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
    ]
    const diaSemana = isToday ? "Hoje" : listaDias[data.getDay()]  
    const diaMes = String(data.getDate()).padStart(2,"0")
    
    const listaMeses = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const mes = listaMeses[data.getMonth()]
    
    const ano = data.getFullYear()
    
    return {diaMes, diaSemana, mes, ano}
}