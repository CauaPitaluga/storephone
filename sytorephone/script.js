const produtos = [
    {nome:"iPhone 13", preco:3999, desc:"Tela 6.1\" OLED, 128GB, câmera dupla e alto desempenho."},
    {nome:"Samsung S23", preco:3499, desc:"Tela AMOLED 120Hz, 128GB, câmera potente e design premium."},
    {nome:"Xiaomi Redmi Note 12", preco:1799, desc:"Ótimo custo-benefício, bateria duradoura e tela grande."},
    {nome:"Notebook Dell Inspiron", preco:4200, desc:"Intel i5, 8GB RAM, SSD rápido ideal para estudos."},
    {nome:"Fone JBL Bluetooth", preco:299, desc:"Som potente, sem fio e bateria de longa duração."},
    {nome:"Smartwatch Amazfit", preco:499, desc:"Monitoramento de saúde, bateria durável e leve."},
    {nome:"Monitor LG 24\"", preco:900, desc:"Tela Full HD, ideal para trabalho e jogos."},
    {nome:"Teclado Mecânico", preco:350, desc:"Alta precisão, iluminação LED e durabilidade."}
];

let carrinho = [];

function carregarProdutos(){
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    produtos.forEach((p, i) => {
        lista.innerHTML += `
        <div class="card">
            <h3>${p.nome}</h3>
            <p>${p.desc}</p>
            <strong>R$ ${p.preco}</strong>
            <button onclick="addCarrinho(${i})">Adicionar</button>
        </div>`;
    });
}

function addCarrinho(index){
    carrinho.push(produtos[index]);
    atualizarCarrinho();
}

function atualizarCarrinho(){
    const lista = document.getElementById("itens-carrinho");
    const contador = document.getElementById("contador");
    const totalEl = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((p, i) => {
        lista.innerHTML += `<p>${p.nome} - R$ ${p.preco}</p>`;
        total += p.preco;
    });

    contador.innerText = carrinho.length;
    totalEl.innerText = "Total: R$ " + total;
}

function mostrarPagina(pagina){
    document.querySelectorAll('.pagina').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById(pagina).classList.add('ativa');
}

function pagar(){
    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
    } else {
        alert("Compra finalizada com sucesso!");
        carrinho = [];
        atualizarCarrinho();
    }
}

carregarProdutos();
