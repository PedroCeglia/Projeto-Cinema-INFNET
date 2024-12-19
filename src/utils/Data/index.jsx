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

export function formatarData(data, isToday=false){
    const listaDias = [
        "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
    ]
    const diaSemana = isToday ? "Hoje" : listaDias[data.getDay()]  
    const diaMes = String(data.getDate()).padStart(2,"0")
    
    const listaMeses = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const mesText = listaMeses[data.getMonth()]

    const mes = data.getMonth() + 1
    
    const ano = data.getFullYear()

    const timestamp = data.getTime()
    
    const hora = data.getHours()

    const minuto = data.getMinutes()
    
    return {diaMes, diaSemana, mes, mesText, ano, timestamp, hora, minuto}
}

export function getTimestamp(dia, mes, ano, hora, minuto) {
    const date = new Date(ano, mes - 1, dia, hora, minuto);
    return date.getTime();
  }
  
export function formatarDataNumericaParaString(dataNumero){
    const dataString = dataNumero.toString()

    return dataString.length > 1 ? dataString : `0${dataString}` 
}

export const getDataSession = (timestamp) => {
    const dataAtual = new Date()
    const dataFilme = new Date(parseInt(timestamp))
    const data = formatarData(
        dataFilme, 
        (dataFilme.getDate() == dataAtual.getDate() && dataFilme.getMonth() == dataAtual.getMonth()) 
    )
    const diaFormatado = formatarDataNumericaParaString(data.diaMes)
    const horaFormatada = formatarDataNumericaParaString(data.hora)
    const minutoFormatada = formatarDataNumericaParaString(data.minuto)
    return {...data, diaFormatado, horaFormatada, minutoFormatada}
}