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

function isValidEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email !== "" && regexEmail.test(email);
}

const wannaAdoptButton = document.getElementById("wanna-adopt");

wannaAdoptButton.addEventListener("click", () => {
  const privacyCheckbox = document.getElementById("privacy-policy-checkbox");
  const adoptEmailInput = document.getElementById("adopt-email-input").value.trim();
  const fullNameInput = document.getElementById("full-name").value.trim();
  const dateInput = document.getElementById("date").value.trim();

  if (!privacyCheckbox.checked) {
    alert("Please check the privacy checkbox.");
    return;
  }
  if (!isValidEmail(adoptEmailInput)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (fullNameInput === "") {
    alert("Please enter your full name.");
    return;
  }
  if (dateInput === "") {
    alert("Please enter a valid date.");
    return;
  }
  window.location.href = "sucess.html";
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

// Nesse caso, ele seleciona somente o botão de submissão, diferente do meu modal, que selecionei todas variáveis previamente
const helpDonateButton = document.getElementById('help-donate-button');

helpDonateButton.addEventListener('click', () => {
  const donateEmailInput = document.getElementById('donate-email-input').value.trim();
  const amountInput = document.getElementById('currencyInput').value.trim();
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

//Validação de email da newsletter

const newsletterForm = document.getElementById("newsletter-form");
const emailBoxNewsletter = document.getElementById("email-box-newsletter");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário
  if (emailBoxNewsletter.value.trim() !== "" && isValidEmail(emailBoxNewsletter.value.trim())) {
    window.location.href = "sucess.html";
  } else {
    alert("Please enter a valid email address.");
  }
});

// Teste Carrossel

// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     if(carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return;
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }

// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);