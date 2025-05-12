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
