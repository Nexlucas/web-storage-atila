export const salvarNoStorage = (chave, valor) => {
     try {
        const valorString = JSON.stringify(valor);
        localStorage.setItem(chave, valorString);
    }catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
    }

};

export const buscarDoStorage = (chave) => {
    try {
        localStorage.getItem(chave);
        return valor ? JSON.parse(valor) : null;
    }catch (error) {

    }
};