//Abrindo adopt modal

// Resgatando o id do adopt modal
const adoptDialog = document.getElementById("adopt-modal-dialog");

// Adicione o evento para todos os botões 'adopt-button'
document.querySelectorAll(".adopt-button").forEach((button) => {
  button.addEventListener("click", () => {
    adoptDialog.showModal();
  });
});

// Botão cancel para fechar o modal
const cancelAdoptButton = document.getElementById("cancel-adopt-modal");
cancelAdoptButton.addEventListener("click", () => {
    adoptDialog.close();
});




// Instruções para centralizar o adopt modal

function centerAdoptModal() {
  let modalWidth = adoptDialog.offsetWidth;
  let modalHeight = adoptDialog.offsetHeight;

  // Calcula as novas posições para centralizar o modal
  let leftPosition = window.innerWidth / 2 - modalWidth / 2;
  let topPosition = window.innerHeight / 2 - modalHeight / 2;

  // Aplica as novas posições
  adoptDialog.style.left = leftPosition + "px";
  adoptDialog.style.top = topPosition + "px";
}

// Centraliza o modal quando a página for carregada
centerAdoptModal();

// Centraliza o modal sempre que o tamanho da janela for alterado
window.addEventListener("resize", centerAdoptModal);




//Validação do Adopt Modal

//Resgatando infos
const wannaAdoptButton = document.getElementById("wanna-adopt");
const privacyCheckbox = document.getElementById("privacy-policy-checkbox");
const emailInput = document.getElementById("email-input");
const fullNameInput = document.getElementById("full-name");
const dateInput = document.getElementById("date");

// Adiciona um event listener para o botão de adoção
wannaAdoptButton.addEventListener("click", () => {
  // Verifica se todos os campos obrigatórios estão preenchidos e a caixa de seleção de privacidade está marcada
  if (
    privacyCheckbox.checked &&
    emailInput.value.trim() !== "" &&
    fullNameInput.value.trim() !== "" &&
    dateInput.value.trim() !== ""
  ) {
    // Se todas as condições forem verdadeiras, redireciona o usuário para a página de sucesso
    window.location.href = "sucess.html";
  } else {
    // Se alguma condição não for atendida, exibe uma mensagem de erro ou toma outra ação, como destacar os campos não preenchidos
    alert(
      "Please fill out all the required fields and check the privacy checkbox."
    );
  }
});




//Abrindo donate modal

//Resgatando o dialog de donate
const donateDialog = document.getElementById("donate-modal-dialog");

// Adicione o evento para todos os botões 'donate-button'
document.querySelectorAll(".donate-button").forEach((button) => {
  button.addEventListener("click", () => {
    donateDialog.showModal();
  });
});

// Botão cancel para fechar o modal
const cancelDonateButton = document.getElementById("cancel-donate-button");
cancelDonateButton.addEventListener("click", () => {
    donateDialog.close();
});




// Instruções para centralizar o donate modal

function centerDonateModal() {
    let modalWidth = donateDialog.offsetWidth;
    let modalHeight = donateDialog.offsetHeight;
  
    // Calcula as novas posições para centralizar o modal
    let leftPosition = window.innerWidth / 2 - modalWidth / 2;
    let topPosition = window.innerHeight / 2 - modalHeight / 2;
  
    // Aplica as novas posições
    donateDialog.style.left = leftPosition + "px";
    donateDialog.style.top = topPosition + "px";
  }
  
// Centraliza o modal quando a página for carregada
centerDonateModal();

// Centraliza o modal sempre que o tamanho da janela for alterado
window.addEventListener("resize", centerDonateModal);




//Validando o donate modal

// Seleciona o botão de submissão
const helpDonateButton = document.getElementById('help-donate-button');

// Adiciona um evento de clique ao botão de submissão
helpDonateButton.addEventListener('click', () => {
    // Resgata os valores dos campos de entrada
    const emailInput = document.getElementById('donate-email-input').value;
    const amountInput = document.getElementById('currencyInput').value;
    const paymentMethodInputs = document.querySelectorAll('input[name="payment-method"]');

    // Verifica se o email é válido
    if (!isValidEmail(emailInput)) {
        alert('Please enter a valid email address.');
        return; // Para a execução da função se o email for inválido
    }

    // Verifica se a quantidade é válida
    if (!isValidAmount(amountInput)) {
        alert('Please enter a valid donation amount.');
        return; // Para a execução da função se a quantidade for inválida
    }

    // Verifica se pelo menos um método de pagamento foi selecionado
    if (!isPaymentMethodSelected(paymentMethodInputs)) {
        alert('Please select a payment method.');
        return; // Para a execução da função se nenhum método de pagamento foi selecionado
    }

    // Se todos os campos estiverem preenchidos corretamente, redireciona para a página de sucesso
    window.location.href = 'sucess.html';
});

// Função para verificar se o email é válido
function isValidEmail(email) {
    // Implemente sua lógica de validação de email aqui
    // Esta é apenas uma verificação básica
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para verificar se a quantidade é válida
function isValidAmount(amount) {
    // Implemente sua lógica de validação de quantidade aqui
    // Esta é apenas uma verificação básica
    return parseFloat(amount) > 0;
}

// Função para verificar se pelo menos um método de pagamento foi selecionado
function isPaymentMethodSelected(inputs) {
    // Verifica se pelo menos um dos botões de rádio está marcado
    for (const input of inputs) {
        if (input.checked) {
            return true;
        }
    }
    return false;
}





//Validação de email da newsletter

const newsletterForm = document.getElementById("newsletter-form");
const emailBoxNewsletter = document.getElementById("email-box-newsletter");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Verifica se o campo de e-mail está preenchido e é válido
  if (
    emailBoxNewsletter.value.trim() !== "" &&
    emailBoxNewsletter.checkValidity()
  ) {
    // Redireciona o usuário para a página de sucesso
    window.location.href = "sucess.html";
  } else {
    // Exibe uma mensagem de erro se o e-mail não for válido
    alert("Please enter a valid email address.");
  }
});