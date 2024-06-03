//Abrindo o adopt modal

const adoptDialog = document.getElementById("adopt-modal-dialog");

// Adicionando o evento para todos os botões 'adopt-button'
document.querySelectorAll(".adopt-button").forEach((button) => {
  button.addEventListener("click", () => {
    adoptDialog.showModal();
  });
});

// Já difere do que foi feito anteriormente pois aqui o botão é único
const cancelAdoptButton = document.getElementById("cancel-adopt-modal");
cancelAdoptButton.addEventListener("click", () => {
    adoptDialog.close();
});

//Validando o adopt modal

//Resgatando infos
const wannaAdoptButton = document.getElementById("wanna-adopt");
const privacyCheckbox = document.getElementById("privacy-policy-checkbox");
const adoptEmailInput = document.getElementById("adopt-email-input");
const fullNameInput = document.getElementById("full-name");
const dateInput = document.getElementById("date");

wannaAdoptButton.addEventListener("click", () => {
  if (privacyCheckbox.checked && adoptEmailInput.value.trim() !== "" && fullNameInput.value.trim() !== "" && dateInput.value.trim() !== "") {
    window.location.href = "sucess.html";
  } else {
    alert("Please fill out all the required fields and check the privacy checkbox.");
  }
});

//Abrindo o donate modal

const donateDialog = document.getElementById("donate-modal-dialog");

document.querySelectorAll(".donate-button").forEach((button) => {
  button.addEventListener("click", () => {
    donateDialog.showModal();
  });
});

const cancelDonateButton = document.getElementById("cancel-donate-button");
cancelDonateButton.addEventListener("click", () => {
    donateDialog.close();
});

//Validando o donate modal - vou testar esse método de verificação para o adopt modal

// Seleciona somente o botão de submissão
const helpDonateButton = document.getElementById('help-donate-button');

helpDonateButton.addEventListener('click', () => {
  const donateEmailInput = document.getElementById('donate-email-input').value;
  const amountInput = document.getElementById('currencyInput').value;
  const paymentMethodInputs = document.querySelectorAll('input[name="payment-method"]');
  if (!isValidEmail(donateEmailInput)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!isValidAmount(amountInput)) {
    alert('Please enter a valid donation amount.');
    return;
  }
  if (!isPaymentMethodSelected(paymentMethodInputs)) {
    alert('Please select a payment method.');
    return; 
  }
  window.location.href = 'sucess.html';
});

function isValidEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function isValidAmount(amount) {
  return parseFloat(amount) > 0;
}

function isPaymentMethodSelected(inputs) {
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
  if (emailBoxNewsletter.value.trim() !== "" && emailBoxNewsletter.checkValidity()) {
    window.location.href = "sucess.html";
  } else {
    alert("Please enter a valid email address.");
  }
});