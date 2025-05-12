fetch ('http://localhost:3000/receitas')
    .then(res => res.json())
    .then(data => 
        { let str = document.getElementById ('todas-container')
    data.forEach(data => {
      const item = document.createElement('li');
      item.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${receita.titulo}</h5>
                            <p class="card-text">${receita.descricao}</p>
                            <a href="detalhes.html" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>`;
      lista.appendChild(item);
    });
  });
  /*
  document.addEventListener('DOMContentLoaded', function() {
    renderReceitasPorCategoria('destaques', 'destaques-container');
    renderReceitasPorCategoria('melhores', 'melhores-container');
    renderReceitasPorCategoria('todas', 'todas-container');
});

function renderReceitasPorCategoria(categoria, containerId, limit = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filtradas = receitas.filter(r => r.categorias.includes(categoria));
    container.innerHTML = '';

    filtradas.forEach((receita, index) => {
        // Se limit=true, mostra apenas 3 primeiras
        if (limit && index >= 3) return;

        const cardLink = document.createElement("a");
        cardLink.href = detalhes.html?id=${receita.id};
        cardLink.classList.add("card-link");
        
        cardLink.innerHTML = `
            <article class="card">
                <img class="fundo" src="${receita.imagem}" alt="${receita.titulo}">
                <img class="foto" src="assets/media/user-image.png" alt="Foto de Perfil">
                <p>Por ${receita.autor}</p>
                <h3 class="tittle-main">${receita.titulo}</h3>
            </article>
        `;
        
        container.appendChild(cardLink);
    });
}
document.getElementById('btn-mais-receitas')?.addEventListener('click', function() {
    // Mostra todas as receitas
    renderReceitasPorCategoria('todas', 'todas-container');

    document.getElementById('todas-container').classList.add('mostrar-todas');});

function carregarDetalheReceita() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (window.location.pathname.includes('detalhes.html')) {
        const receita = receitas.find(r => r.id === id);
        if (!receita) return;

        const container = document.getElementById("detalhes-receita");
        if (!container) return;

        container.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.titulo}" style="width: 100%; max-width: 600px; float: left;">
            <h1>${receita.titulo}</h1>
            <p><strong>Autor:</strong> ${receita.autor}</p>
            <p>${receita.descricao}</p>
            <p style="margin: 0 30px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut distinctio voluptates, accusantium unde vel. Odit modi fuga a natus dicta, delectus impedit deserunt harum facere, magnam deleniti adipisci doloremque molestiae cupiditate ducimus. Dolorem ratione nobis commodi amet laboriosam voluptas debitis, culpa sint harum veritatis molestias fugit necessitatibus, a ipsam?</p>
        `;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    renderReceitasPorCategoria('destaques', 'destaques-container');
    renderReceitasPorCategoria('melhores', 'melhores-container');
    renderReceitasPorCategoria('todas', 'todas-container', true); // true = limitar a 3
});
let mostrarTodas = false;
document.getElementById('btn-mais-receitas').addEventListener('click', function() {
    mostrarTodas = !mostrarTodas;
    
    if(mostrarTodas) {
        renderReceitasPorCategoria('todas', 'todas-container');
        this.textContent = 'Mostrar menos';
    } else {
        renderReceitasPorCategoria('todas', 'todas-container', true);
        this.textContent = 'Mais receitas';
    }
    
    document.getElementById('todas-container').classList.toggle('mostrar-todas', mostrarTodas);
});
carregarDetalheReceita(); */