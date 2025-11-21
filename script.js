// -----------------------------------------------------
// CONTEÚDOS DAS TELAS (SIMULAÇÃO DE SPA)
// -----------------------------------------------------

// Armazena o HTML de cada “tela” separadamente
const conteudo_telas = {
    home: `
        <h1>Bem-vindo ao nosso Ecommerce!</h1>
        <p>Use o menu acima para navegar.</p>
    `,

    sobre: `
        <h1>Sobre nós</h1>
        <p>Aplicação simples demonstrando SPA com JavaScript vanilla.</p>
    `,

    produtos: `
        <h1>Produtos</h1>
        <div id="produtos-lista" class="produtos-container"></div>
        <div class="paginacao">
            <button id="botao-anterior" onclick="paginaAnterior()">Anterior</button>
            <button id="botao-proximo" onclick="paginaProxima()">Próximo</button>
        </div>
    `
};