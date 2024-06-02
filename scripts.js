// Resgatando o id do adopt modal
const dialog = document.getElementById('adopt-modal-dialog');

// Adicione o evento para todos os botões 'adopt-button'
document.querySelectorAll('.adopt-button').forEach(button => {
    button.addEventListener('click', () => {
        dialog.showModal();
    });
});

// Botão cancel para fechar os modais
const cancelButton = document.getElementById('cancel-adopt-modal');
cancelButton.addEventListener('click', () => {
    dialog.close();
});


// Instruções para centralizar o modal
function centerModal() {
    const modalWidth = dialog.offsetWidth;
    const modalHeight = dialog.offsetHeight;

    // Calcula as novas posições para centralizar o modal
    const leftPosition = window.innerWidth / 2 - modalWidth / 2;
    const topPosition = window.innerHeight / 2 - modalHeight / 2;

    // Aplica as novas posições
    dialog.style.left = leftPosition + 'px';
    dialog.style.top = topPosition + 'px';
}

// Centraliza o modal quando a página for carregada
centerModal();

// Centraliza o modal sempre que o tamanho da janela for alterado
window.addEventListener('resize', centerModal);