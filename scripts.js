const openButton = document.getElementById('open-adopt-modal');
const dialog = document.getElementById('adopt-modal-dialog');
const cancelButton = document.getElementById('cancel-adopt-modal');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

function centerModal() {
    const modalWidth = dialog.offsetWidth;
    const modalHeight = dialog.offsetHeight;

    // Calcule as novas posições para centralizar o modal
    const leftPosition = window.innerWidth / 2 - modalWidth / 2;
    const topPosition = window.innerHeight / 2 - modalHeight / 2;

    // Aplique as novas posições
    dialog.style.left = leftPosition + 'px';
    dialog.style.top = topPosition + 'px';
}

// Chame a função para centralizar o modal quando a página for carregada
centerModal();

// Chame a função para centralizar o modal sempre que o tamanho da janela for alterado
window.addEventListener('resize', centerModal);