function createModal(content) {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal">
      <span class="close-btn">&times;</span>
      <div class="modal-content">${content}</div>
    </div>
  `;

  modal.querySelector('.close-btn').onclick = () => {
    document.body.removeChild(modal);
  };

  document.body.appendChild(modal);
}
