let itens = [
    { id: 1, nome: 'Playstation 4', descricao: 'Playstation 4 Slim com 1 TB de armazenamento.', imagem: 'images/ps4.png' },
    { id: 2, nome: 'Nintendo 3DS', descricao: 'Nintendo 3DS Usado, Aceitamos trocas!', imagem: 'images/3DS.png' },
    { id: 3, nome: 'Nintendo Switch', descricao: 'Nintendo Switch com mais de 1500 jogos instalados.', imagem: 'images/nintendo-switch.png' },
    { id: 4, nome: 'Playstation 5', descricao: 'Playstation 5 Novo, não aceitamos trocas!', imagem: 'images/ps5.webp' },
    { id: 5, nome: 'Nintendo Gameboy', descricao: 'Nintendo Gameboy Usado Funcionando Perfeitamente.', imagem: 'images/gameboy.png' },
    { id: 6, nome: 'Nintendo 1996', descricao: 'Nintendo 96 restaurado, 0 jogos incluso.', imagem: 'images/nintendo-1996.png' }
];

function renderItem(item) {
    const cardWrapper = document.querySelector('.card-wrapper');

    const card = document.createElement('div');
    card.classList.add('card-item');
    card.setAttribute('id', `card${item.id}`);

    card.innerHTML = `
        <div class="editor">
          <a href="#" onclick="postEdit('card${item.id}')">
            <img src="images/edit.png" alt="Botão" />
          </a>
        </div>
        <img src="${item.imagem}" alt="${item.nome}" />
        <div class="card-content">
          <h3>${item.nome}</h3>
          <p>${item.descricao}</p>
        </div>
        <button type="button">Comprar</button>
    `;

    cardWrapper.appendChild(card);
}

function renderItems() {
    itens.forEach(renderItem);
}

function saveNewPost() {
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    const image = document.getElementById('postImage').value;

    if (title && description && image) {
       
        const newItem = {
            id: itens.length + 1,
            nome: title,
            descricao: description,
            imagem: image
        };

        itens.push(newItem);

        renderItem(newItem);  

        closeAddPostModal();

        document.getElementById('addPostForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function postEdit(cardID) {
    const cardIndex = itens.findIndex(item => `card${item.id}` === cardID);
    const item = itens[cardIndex];

    const action = prompt('Escolha uma ação: "editar" ou "deletar"').toLowerCase();

    if (action === 'editar') {
        const newTitle = prompt('Edite o nome do console:', item.nome);
        const newDescription = prompt('Edite a descrição:', item.descricao);
        const newImage = prompt('Edite o caminho da imagem:', item.imagem);


        if (newTitle) item.nome = newTitle;
        if (newDescription) item.descricao = newDescription;
        if (newImage) item.imagem = newImage;

        const card = document.getElementById(cardID);
        card.querySelector('.card-content h3').textContent = item.nome;
        card.querySelector('.card-content p').textContent = item.descricao;

        const mainImage = card.querySelector('img:not(.editor img)');
        mainImage.src = item.imagem;
        mainImage.alt = item.nome;

    } else if (action === 'deletar') {
        const confirmDelete = confirm('Tem certeza que deseja deletar este card?');
        if (confirmDelete) {
            itens.splice(cardIndex, 1); 
            document.getElementById(cardID).remove(); 
        }
    } else {
        alert('Ação inválida. Escolha "editar" ou "deletar".');
    }
}


function filterCatalog() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cardItems = document.querySelectorAll('.card-item');

    cardItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function adicionarPost() {
    document.getElementById('addPostModal').style.display = 'flex';
}

function closeAddPostModal() {
    document.getElementById('addPostModal').style.display = 'none';
}

renderItems();
