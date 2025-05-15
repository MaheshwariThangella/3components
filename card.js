function createCard(title, description, imageSrc) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${imageSrc}" alt="${title}">
    <h3>${title}</h3>
    <p>${description}</p>
    <button class="btn">Buy Now</button>
  `;

  return card;
}

// Additional reusable card types
function createFeaturedCard(title, description, imageSrc) {
  const card = createCard(title, description, imageSrc);
  card.style.border = '2px solid gold';
  card.style.backgroundColor = '#fffbe6';
  return card;
}

function createSaleCard(title, description, imageSrc) {
  const card = createCard(title, description, imageSrc);
  const saleBadge = document.createElement('div');
  saleBadge.textContent = 'SALE';
  saleBadge.style.background = 'red';
  saleBadge.style.color = 'white';
  saleBadge.style.padding = '4px';
  saleBadge.style.position = 'absolute';
  saleBadge.style.top = '10px';
  saleBadge.style.left = '10px';
  saleBadge.style.borderRadius = '4px';
  card.style.position = 'relative';
  card.appendChild(saleBadge);
  return card;
}
