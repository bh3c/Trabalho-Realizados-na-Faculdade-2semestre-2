
const imagens = document.querySelectorAll(".carousel img");
let index = 0;
const botaoNext = document.querySelector(".next");
const botaoPrev = document.querySelector(".prev");
const carrossel = document.querySelector(".carousel");
const total = imagens.length;
let intervalo;

function mostrarImagem(novoIndex) {
  imagens[index].classList.remove("active");
  index = (novoIndex + imagens.length) % imagens.length;
  imagens[index].classList.add("active");
}

function iniciarAutoplay() {
  intervalo = setInterval(function() {
    mostrarImagem(index + 1);
  }, 5000);
}

function pararAutoplay() {
  clearInterval(intervalo);
}

function reiniciarAutoplay() {
  pararAutoplay();
  iniciarAutoplay();
}

if (botaoNext && botaoPrev && carrossel) {
  botaoNext.addEventListener("click", function() {
    mostrarImagem(index + 1);
    reiniciarAutoplay();
  });

  botaoPrev.addEventListener("click", function() {
    mostrarImagem(index - 1);
    reiniciarAutoplay();
  });

  carrossel.addEventListener("mouseenter", function() {
    pararAutoplay();
  });

  carrossel.addEventListener("mouseleave", function() {
    iniciarAutoplay();
  });

  iniciarAutoplay();
}


const headers = document.querySelectorAll('.accordion-header'); 
const contents = document.querySelectorAll('.accordion-content'); 

function toggleAccordion(event) {
  const headerClicado = event.target;
  const content = headerClicado.nextElementSibling;

  contents.forEach(function(item) {
    if (item !== content) {
      item.classList.remove('active');
    }
  });

  content.classList.toggle('active');
}

headers.forEach(function(header) {
  header.addEventListener('click', toggleAccordion);
});


const form = document.getElementById("formCadastro");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade") ? document.getElementById("idade").value : "";

    if (nome && email) {
      localStorage.setItem("usuarioLogado", nome);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  });
}


const botaoCadastro = document.getElementById("botaoCadastro");
const usuarioLogado = localStorage.getItem("usuarioLogado");

if (usuarioLogado && botaoCadastro) {
  botaoCadastro.textContent = "Sair da conta";
  botaoCadastro.href = "#";

  botaoCadastro.addEventListener("click", function() {
    localStorage.removeItem("usuarioLogado");
    alert("Você saiu da conta!");
    botaoCadastro.textContent = "Cadastro";
    botaoCadastro.href = "cadastro.html";
  });
}

const modoEscuroBtn = document.getElementById("modoEscuroBtn");

if (modoEscuroBtn) {

  const modoAtivo = localStorage.getItem("modoEscuroAtivo");

  if (modoAtivo === "true") {
    document.body.classList.add("dark-mode");
    modoEscuroBtn.textContent = "☀️";
  } else {
    modoEscuroBtn.textContent = "🌙";
  }

  modoEscuroBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    const ativo = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoEscuroAtivo", ativo);

    modoEscuroBtn.textContent = ativo ? "☀️" : "🌙";
  });
}
