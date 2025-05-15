function createButton(label, onClick, className = 'btn') {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = label;
  button.addEventListener('click', onClick);
  return button;
}

// Reusable buttons
function createPrimaryButton(label, onClick) {
  return createButton(label, onClick, 'btn btn-primary');
}

function createSecondaryButton(label, onClick) {
  return createButton(label, onClick, 'btn btn-secondary');
}

function createDangerButton(label, onClick) {
  return createButton(label, onClick, 'btn btn-danger');
}
