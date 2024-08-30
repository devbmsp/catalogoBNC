function postEdit(cardID)
{

        const card = document.getElementById(cardID);
        
        
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        
        const newTitle = prompt('Edite o nome do console:', title.textContent);
        const newDescription = prompt('Edite a descrição:', description.textContent);
        const newImage = prompt('Edite o caminho da imagem:', img.src);
    
        
        if (newTitle) {
            title.textContent = newTitle;
        }
        if (newDescription) {
            description.textContent = newDescription;
        }
        if (newImage) {
            img.src = newImage;
            img.alt = newTitle || title.textContent; 
        
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
