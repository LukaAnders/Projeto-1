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

// -----------------------------------------------------
// DADOS SIMULADOS DE PRODUTOS
// -----------------------------------------------------

const lista_de_produtos = Array.from({ length: 20 }, (_, indice) => ({
    id_produto: indice + 1,
    nome_produto: `Produto ${indice + 1}`,
    preco_produto: (10 + indice).toFixed(2),
    imagem_produto: "https://via.placeholder.com/200x150"
}));

// -----------------------------------------------------
// CONFIGURAÇÕES DE PAGINAÇÃO
// -----------------------------------------------------

let pagina_atual = 1;
const itens_por_pagina = 6;

// Função que renderiza os produtos da página atual
function renderizar_produtos() {
    const indice_inicio = (pagina_atual - 1) * itens_por_pagina;
    const indice_fim = indice_inicio + itens_por_pagina;

    const produtos_da_pagina = lista_de_produtos.slice(indice_inicio, indice_fim);

    const container_de_produtos = document.getElementById("produtos-lista");
    container_de_produtos.innerHTML = "";

    produtos_da_pagina.forEach(produto => {
        const elemento_card = document.createElement("div");
        elemento_card.className = "produto-card";

        elemento_card.innerHTML = `
            <img src="${produto.imagem_produto}" alt="${produto.nome_produto}">
            <h3>${produto.nome_produto}</h3>
            <p>Preço: R$ ${produto.preco_produto}</p>
        `;

        container_de_produtos.appendChild(elemento_card);
    });