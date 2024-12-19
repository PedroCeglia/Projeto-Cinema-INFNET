export const getDataInLocalStorage = (chave, valorInicial) => {
    try {
        const item = window.localStorage.getItem(chave);
        return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
        console.error("Erro ao acessar o localStorage");
        return valorInicial;
    }
}

export const setDataInLocalStorage = (chave, newValue) => {
    try {
        window.localStorage.setItem(chave, JSON.stringify(newValue));
      } catch (error) {
        console.error("Erro ao salvar no localStorage");
      }
}